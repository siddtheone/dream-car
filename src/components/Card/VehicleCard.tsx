import { Row, Title, Value } from "components/UI";
import { Vehicle } from "types";
import StyledVehicleCard from "./StyledVehicleCard";

export function VehicleCard(
  props: Vehicle & { onClick?: (e: Vehicle) => void }
) {
  const { onClick, ...vehicle } = props;
  const {
    make,
    model,
    enginePowerPS,
    enginePowerKW,
    fuelType,
    bodyType,
    engineCapacity,
  } = vehicle;
  return (
    <StyledVehicleCard onClick={() => onClick && onClick(vehicle)}>
      <Row>
        <Title>Make:</Title>
        <Value>{make}</Value>
      </Row>
      <Row>
        <Title>Model:</Title>
        <Value>{model}</Value>
      </Row>
      <Row>
        <Title>Engine power(PS):</Title>
        <Value>{enginePowerPS}</Value>
      </Row>
      <Row>
        <Title>Engine power(PW):</Title>
        <Value>{enginePowerKW}</Value>
      </Row>
      <Row>
        <Title>Fuel type:</Title>
        <Value>{fuelType}</Value>
      </Row>
      <Row>
        <Title>Body type:</Title>
        <Value>{bodyType}</Value>
      </Row>
      <Row>
        <Title>Engine capacity:</Title>
        <Value>{engineCapacity}</Value>
      </Row>
    </StyledVehicleCard>
  );
}

export default VehicleCard;
