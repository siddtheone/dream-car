describe("Dream car app", () => {
  const MAKES = ["FORD", "BMW"];
  const MODELS = ["Explorer", "Fiesta"];
  const VEHICLES = [
    {
      make: "FORD",
      model: "Fiesta",
      enginePowerPS: 60,
      enginePowerKW: 44,
      fuelType: "Benzin",
      bodyType: "Limousine",
      engineCapacity: 1299,
    },
  ];

  beforeEach(() => {
    cy.intercept(
      {
        url: "http://localhost:8080/api/makes",
      },
      MAKES
    ).as("makes");
    cy.intercept(
      {
        url: "http://localhost:8080/api/models*",
      },
      { body: MODELS, delay: 100 }
    ).as("models");
    cy.intercept(
      {
        url: "http://localhost:8080/api/vehicles*",
      },
      { body: VEHICLES, delay: 100 }
    ).as("vehicles");
  });
  it("can select car", () => {
    cy.visit("/");
    cy.findByText(/loading/i);

    //Select MAKE
    cy.findByText(MAKES[0]).click();
    cy.findByText(/loading/i);
    cy.wait("@models").its("request.url").should("include", `make=${MAKES[0]}`);
    cy.location("pathname").should("include", MAKES[0]);
    cy.findByText(MAKES[0]);

    //SELECT MODEL
    cy.findByText(MODELS[1]).click();
    cy.findByText(/loading/i);
    cy.wait("@vehicles")
      .its("request.url")
      .should("include", `make=${MAKES[0]}&model=${MODELS[1]}`);
    cy.location("pathname").should("include", `${MAKES[0]}/${MODELS[1]}`);

    cy.findByText(VEHICLES[0].bodyType);
    cy.findByText(VEHICLES[0].engineCapacity);
    cy.findByText(VEHICLES[0].enginePowerKW);
    cy.findByText(VEHICLES[0].enginePowerPS);
    cy.findByText(VEHICLES[0].fuelType);
  });

  it("can filter models", () => {
    cy.visit(`/${MAKES[0]}`);
    cy.findByText(MODELS[0]);
    cy.findByPlaceholderText(/search/i).type(MODELS[1]);
    cy.findByText(MODELS[0]).should("not.exist");
  });

  it("shows error message", () => {
    cy.intercept(
      {
        url: "http://localhost:8080/api/makes",
      },
      {
        statusCode: 503,
      }
    ).as("makes");
    cy.visit("/");
    cy.findByText(/something went wrong/i, { timeout: 20000 });
  });
});
