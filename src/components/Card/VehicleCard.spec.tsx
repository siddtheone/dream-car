import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VehicleCard from "./VehicleCard";

describe("Vehicle details", () => {
  it("Has all vehicle details", () => {
    const vehicle = {
      make: "BMW",
      model: "3er",
      enginePowerPS: 272,
      enginePowerKW: 200,
      fuelType: "Benzin",
      bodyType: "Kombi",
      engineCapacity: 2996,
    };
    const onClick = jest.fn();
    render(<VehicleCard {...vehicle} onClick={onClick} />);
    Object.values(vehicle).map((info) => screen.getByText(info));
    userEvent.click(screen.getByText(vehicle.make));
    expect(onClick).toHaveBeenCalledWith(vehicle);
  });
});
