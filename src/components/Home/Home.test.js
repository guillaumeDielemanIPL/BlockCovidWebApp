import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";
import HomeContent from "./HomeContent";

test("renders content", () => {
  const component = render(
    <div>
      <Header />
      <HomeContent />
    </div>
  );
});
