import { Text } from "./StyledInfoText";

import { render } from "@testing-library/react";
import "jest-styled-components";

test("Type in text", () => {
  const { container } = render(<Text primary>Hi</Text>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      font-size: 1.2rem;
      font-weight: bold;
      padding-bottom: 8px;
    }

    <p
      class="c0"
    >
      Hi
    </p>
  `);
});
