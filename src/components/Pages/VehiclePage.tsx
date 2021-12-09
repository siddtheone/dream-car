import { VehicleCard } from "components/Card";
import Grid from "components/Grid";
import { ErrorText, InfoText } from "components/UI";
import { useGetVehicles } from "hooks/api";
import { Vehicle } from "types";

export interface VehiclePageProps {
  make: string;
  model: string;
  onClick: (e: Vehicle) => void;
}

export function VehiclePage({ onClick, make, model }: VehiclePageProps) {
  const { data = [], isLoading, isError } = useGetVehicles({ make, model });
  if (isLoading) {
    return <InfoText>Loading...</InfoText>;
  }

  if (isError) {
    return <ErrorText>Something went wrong!!!</ErrorText>;
  }

  return data.length === 0 ? (
    <InfoText>No records found</InfoText>
  ) : (
    <Grid>
      {data.map((e, i) => (
        <VehicleCard
          key={`${e.make}_${e.model}_${i}`}
          onClick={onClick}
          {...e}
        />
      ))}
    </Grid>
  );
}

export default VehiclePage;
