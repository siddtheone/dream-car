import TextField from "./TextField";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
test("Type in text", () => {
  const onChange = jest.fn();
  render(<TextField onChange={onChange} />);
  const textField = screen.getByPlaceholderText(/search/i);
  const text = "Ipsum";
  userEvent.type(textField, text);
  expect(onChange.mock.calls).toEqual([
    ["I"],
    ["Ip"],
    ["Ips"],
    ["Ipsu"],
    ["Ipsum"],
  ]);
});
