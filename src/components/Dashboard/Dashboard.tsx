import { VehicleCard } from "components/Card";
import Grid from "components/Grid";
import Header from "components/Header";
import { DefaultPage, VehiclePage } from "components/Pages";
import { Choice, Flex } from "components/UI";
import { useGetMakes, useGetModels } from "hooks/api";
import { useState } from "react";
import { Vehicle } from "types";

export function Dashboard() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const {
    data: makesData = [],
    isLoading: makesIsLoading,
    isError: makesIsError,
  } = useGetMakes();
  const {
    data: modelsData = [],
    isLoading: modelsIsLoading,
    isError: modelsIsError,
  } = useGetModels(make);

  const clearAll = () => {
    setMake("");
    setModel("");
    setVehicle(null);
  };

  const clearModel = () => {
    setModel("");
    setVehicle(null);
  };
  const clearVehicle = () => {
    setVehicle(null);
  };

  return (
    <div>
      <Header>Dream Car</Header>
      <Flex>
        {make && <Choice onClick={clearAll}>{make}</Choice>}{" "}
        {model && <Choice onClick={clearModel}>{model}</Choice>}
        {vehicle && <Choice onClick={clearVehicle}>Clear vehicle</Choice>}
      </Flex>
      {!make && (
        <DefaultPage
          data={makesData}
          isLoading={makesIsLoading}
          isError={makesIsError}
          onClick={setMake}
        />
      )}
      {make && !model && (
        <DefaultPage
          data={modelsData}
          isLoading={modelsIsLoading}
          isError={modelsIsError}
          onClick={setModel}
        />
      )}
      {make && model && vehicle === null && (
        <VehiclePage make={make} model={model} onClick={setVehicle} />
      )}
      {vehicle && (
        <Grid>
          <VehicleCard {...vehicle} />
        </Grid>
      )}
    </div>
  );
}

export default Dashboard;
