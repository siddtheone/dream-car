import { useState } from "react";
import StyledTextField from "./StyledTextField";

export interface TextFieldProps {
  onChange?: (e: string) => void;
}

export function TextField({ onChange }: TextFieldProps) {
  const [value, setValue] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    onChange && onChange(value);
  };
  return (
    <StyledTextField
      onChange={handleChange}
      value={value}
      placeholder="Search..."
    />
  );
}

export default TextField;
