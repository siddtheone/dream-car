import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

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
  render(<Card vehicle={vehicle} selected={false} onClick={mockFn} />);
  Object.values(vehicle).forEach((info) => screen.getByText(info));
  userEvent.click(screen.getByText(/bmw/i));
  expect(mockFn).toHaveBeenCalled();
});
