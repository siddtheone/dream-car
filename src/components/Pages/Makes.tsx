import {
  StyledLink,
  StyledGrid,
  StyledInfoText,
  StyledErrorText,
} from "components/StyledComponents";
import { TextField } from "components/TextField";
import { useGetMakes } from "hooks/api";
import { useState } from "react";
import { contains } from "utils/utils";

export function Makes() {
  const [search, setSearch] = useState("");
  const { data = [], isLoading, isError } = useGetMakes();

  const filteredData = data.filter(
    (make) => search === "" || contains(make, search)
  );
  return (
    <div>
      <TextField onChange={setSearch} />
      {isLoading && <StyledInfoText>Loading...</StyledInfoText>}
      {filteredData.length === 0 && !isLoading && !isError && (
        <StyledInfoText>No records found</StyledInfoText>
      )}
      {isError && (
        <StyledErrorText>
          Something went wrong. Try again later.
        </StyledErrorText>
      )}
      {filteredData.length > 0 && !isError && (
        <StyledGrid>
          {filteredData.map((make) => (
            <StyledLink to={make} key={make}>
              {make}
            </StyledLink>
          ))}
        </StyledGrid>
      )}
    </div>
  );
}

export default Makes;
