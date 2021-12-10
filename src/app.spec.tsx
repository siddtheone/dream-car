import App from "./App";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const makes = ["BMW", "Honda"];
const models = ["City", "Civic"];
const vehicles = [
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

const server = setupServer(
  rest.get("http://localhost:8080/api/makes", (req, res, ctx) => {
    return res(ctx.json(makes));
  }),
  rest.get("http://localhost:8080/api/models", (req, res, ctx) => {
    return res(ctx.json(models));
  }),
  rest.get("http://localhost:8080/api/vehicles", (req, res, ctx) => {
    return res(ctx.json(vehicles));
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
test("Can select car", async () => {
  render(<App />);

  screen.getByText(/loading/i);
  const bmw = await screen.findByText(/bmw/i);
  screen.getByText(/honda/i);
  userEvent.click(bmw);
  const city = await screen.findByText(/city/i);
  userEvent.click(city);

  await screen.findByText(vehicles[0].bodyType);
  screen.getByText(vehicles[0].engineCapacity);
  screen.getByText(vehicles[0].enginePowerKW);
  screen.getByText(vehicles[0].enginePowerPS);
  screen.getByText(vehicles[0].fuelType);
  screen.getByText(vehicles[0].make);
  screen.getByText(vehicles[0].model);
});
