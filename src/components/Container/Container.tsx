import { Makes, Models, Vehicles } from "components/Pages";
import { StyledHeader, StyledMaxWidth } from "components/StyledComponents";
import { Route, Routes } from "react-router-dom";

export function Container() {
  return (
    <>
      <StyledHeader>Dream Car</StyledHeader>
      <StyledMaxWidth>
        <Routes>
          <Route path="/" element={<Makes />} />
          <Route path="/:make" element={<Models />} />
          <Route path="/:make/:model" element={<Vehicles />} />
          <Route path="*" element={<div>💣 Not found</div>} />
        </Routes>
      </StyledMaxWidth>
    </>
  );
}

export default Container;
