import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

const vehicle = {
  make: "BMW",
  model: "3er",
  enginePowerPS: 272,
  enginePowerKW: 200,
  fuelType: "Benzin",
  bodyType: "Kombi",
  engineCapacity: 2996,
};
test("renders learn react link", () => {
  const mockFn = jest.fn();
  const { container } = render(
    <Card vehicle={vehicle} selected={true} onClick={mockFn} />
  );
  Object.values(vehicle).forEach((info) => screen.getByText(info));
  userEvent.click(screen.getByText(/bmw/i));
  expect(mockFn).toHaveBeenCalled();
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1.2rem;
      font-weight: bold;
      padding-bottom: 8px;
    }

    .c2 {
      font-size: 1.2rem;
      font-weight: normal;
      padding-bottom: 8px;
    }

    .c0 {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      padding: 8px;
      color: white;
      background: lightcoral;
      cursor: pointer;
      outline: red solid 5px;
    }

    <div
      class="c0"
    >
      <p
        class="c1"
      >
        Make
      </p>
      <p
        class="c2"
      >
        BMW
      </p>
      <p
        class="c1"
      >
        Model
      </p>
      <p
        class="c2"
      >
        3er
      </p>
      <p
        class="c1"
      >
        Body type
      </p>
      <p
        class="c2"
      >
        Kombi
      </p>
      <p
        class="c1"
      >
        Fuel type
      </p>
      <p
        class="c2"
      >
        Benzin
      </p>
      <p
        class="c1"
      >
        Engine capacity
      </p>
      <p
        class="c2"
      >
        2996
      </p>
      <p
        class="c1"
      >
        Engine power(KW)
      </p>
      <p
        class="c2"
      >
        200
      </p>
      <p
        class="c1"
      >
        Engine power(PS)
      </p>
      <p
        class="c2"
      >
        272
      </p>
    </div>
  `);
});
