import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HomeView from "components/Home/HomeView";
import NavBar from "./NavBar";

test("renders content", () => {
  const component = render(
    <div>
      <NavBar />
    </div>
  );
});
