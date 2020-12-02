import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";
import HomeContent from "./HomeContent";
import Footer from "./Footer";

test("renders content", () => {
  const component = render(
    <div>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
});
