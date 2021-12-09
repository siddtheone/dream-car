import Card from "components/Card";
import Grid from "components/Grid";
import { ErrorText, InfoText } from "components/UI";

export interface DefaultPageProps {
  data: string[];
  isLoading: boolean;
  isError: boolean;
  onClick: (e: string) => void;
}

export function DefaultPage({
  data,
  isLoading,
  isError,
  onClick,
}: DefaultPageProps) {
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
      {data.map((e) => (
        <Card key={e} onClick={() => onClick(e)}>
          {e}
        </Card>
      ))}
    </Grid>
  );
}

export default DefaultPage;
