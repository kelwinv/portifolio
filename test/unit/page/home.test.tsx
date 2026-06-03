import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "app/page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /site em manutenção/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the maintenance image", () => {
    render(<Home />);
    const image = screen.getByAltText("Picture of the author");
    expect(image).toBeInTheDocument();
  });

  it("renders the email contact link", () => {
    render(<Home />);
    const emailLink = screen.getByRole("link", {
      name: /kelwin\.v\.goncalves@gmail\.com/i,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:kelwin.v.goncalves@gmail.com",
    );
  });

  it("renders the GitHub link", () => {
    render(<Home />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/kelwinv");
  });

  it("renders the LinkedIn link", () => {
    render(<Home />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/kelwinv",
    );
  });
});
