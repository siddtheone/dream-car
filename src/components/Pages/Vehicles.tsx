import { Card } from "components/Card";
import {
  StyledGrid,
  StyledInfoText,
  StyledErrorText,
  StyledBreadcrumb,
} from "components/StyledComponents";
import { TextField } from "components/TextField";
import { useGetVehicles } from "hooks/api";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { contains } from "utils/utils";

export function Vehicles() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(-1);
  const { make, model } = useParams();
  const {
    data = [],
    isLoading,
    isError,
  } = useGetVehicles({ make: make || "", model: model || "" });

  const filteredData = data.filter(({ bodyType, make, model, fuelType }) => {
    if (search === "") {
      return true;
    }
    return (
      contains(bodyType, search) ||
      contains(make, search) ||
      contains(model, search) ||
      contains(fuelType, search)
    );
  });

  return (
    <div>
      <TextField value={search} onChange={setSearch} />
      <StyledBreadcrumb>
        <Link to="/">{make}</Link>
        <Link to={`../${make}`}>{model}</Link>
      </StyledBreadcrumb>
      {isLoading && <StyledInfoText>Loading...</StyledInfoText>}
      {filteredData.length === 0 && !isLoading && !isError && (
        <StyledInfoText>No records found</StyledInfoText>
      )}
      {isError && (
        <StyledErrorText>
          Something went wrong. Try again later.
        </StyledErrorText>
      )}

      <StyledGrid>
        {filteredData.length > 0 &&
          filteredData.map((vehicle, i) => (
            <Card
              vehicle={vehicle}
              selected={i === selected}
              onClick={() => setSelected(i)}
              key={`${vehicle.enginePowerKW}_${vehicle.enginePowerPS}_${i}`}
            />
          ))}
      </StyledGrid>
    </div>
  );
}

export default Vehicles;
