import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

test("renders content", () => {
  const component = render(<p>Test is OK</p>);
});
