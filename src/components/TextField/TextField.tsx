import StyledTextField from "./StyledTextField";

export interface TextFieldProps {
  value: string;
  onChange: (e: string) => void;
}

export function TextField({ onChange, value }: TextFieldProps) {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value);
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
