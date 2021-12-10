import {
  StyledLink,
  StyledGrid,
  StyledInfoText,
  StyledErrorText,
  StyledBreadcrumb,
} from "components/StyledComponents";
import { TextField } from "components/TextField";
import { useGetModels } from "hooks/api";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { contains } from "utils/utils";

export function Models() {
  const [search, setSearch] = useState("");
  const { make } = useParams();
  const { data = [], isLoading, isError } = useGetModels(make || "");

  const filteredData = data.filter(
    (make) => search === "" || contains(make, search)
  );
  return (
    <div>
      <TextField onChange={setSearch} />
      <StyledBreadcrumb>
        <Link to="/">{make}</Link>
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
          filteredData.map((model) => (
            <StyledLink to={`${model}`} key={model}>
              {model}
            </StyledLink>
          ))}
      </StyledGrid>
    </div>
  );
}

export default Models;
