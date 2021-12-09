import App from "./App";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const makes = ["BMW", "Honda"];

const server = setupServer(
  rest.get("http://localhost:8080/api/makes", (req, res, ctx) => {
    return res(ctx.json(makes));
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
describe("App", () => {
  it("can select car", async () => {
    render(<App />);
    screen.getByText(/loading/i);
    const bmw = await screen.findByText(/bmw/i);
    screen.getByText(/honda/i);
    userEvent.click(bmw);
  });
});
