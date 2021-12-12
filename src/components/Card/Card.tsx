import { Vehicle } from "types";
import StyledCard from "./StyledCard";
import { Text } from "components/StyledComponents";

export interface CardProps {
  vehicle: Vehicle;
  selected: boolean;
  onClick: () => void;
}

export function Card({ vehicle, selected, onClick }: CardProps) {
  const {
    make,
    model,
    bodyType,
    fuelType,
    engineCapacity,
    enginePowerKW,
    enginePowerPS,
  } = vehicle;
  return (
    <StyledCard selected={selected} onClick={onClick}>
      <Text primary>Make</Text>
      <Text>{make}</Text>
      <Text primary>Model</Text>
      <Text>{model}</Text>
      <Text primary>Body type</Text>
      <Text>{bodyType}</Text>
      <Text primary>Fuel type</Text>
      <Text>{fuelType}</Text>
      <Text primary>Engine capacity</Text>
      <Text>{engineCapacity}</Text>
      <Text primary>Engine power(KW)</Text>
      <Text>{enginePowerKW}</Text>
      <Text primary>Engine power(PS)</Text>
      <Text>{enginePowerPS}</Text>
    </StyledCard>
  );
}

export default Card;
