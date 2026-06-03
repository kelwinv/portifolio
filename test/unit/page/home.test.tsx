import { render, screen } from "@testing-library/react";
import Home from "app/page";

describe("Home Page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /kelwin vieira/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders main sections", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /sobre mim/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /números de impacto/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /certificações/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projetos pessoais/i }),
    ).toBeInTheDocument();
  });

  it("renders Ver trajetória CTA", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /ver trajetória/i }),
    ).toBeInTheDocument();
  });

  it("renders hero pitch aligned with LinkedIn summary", () => {
    render(<Home />);
    expect(screen.getByText(/liderança em equipes ágeis/i)).toBeInTheDocument();
  });

  it("renders contact location and phone", () => {
    render(<Home />);
    expect(screen.getAllByText(/Osasco, São Paulo/i).length).toBeGreaterThan(0);
  });

  it("renders link to all projects", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /ver todos os projetos/i });
    expect(link).toHaveAttribute("href", "/projetos");
  });

  it("renders the CV download link", () => {
    render(<Home />);
    const cvLink = screen.getByRole("link", { name: /baixar cv/i });
    expect(cvLink).toHaveAttribute("href", "/cv/kelwin.vieira.pdf");
  });

  it("renders main contact links", () => {
    render(<Home />);
    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(
      githubLinks.some(
        (a) => a.getAttribute("href") === "https://github.com/kelwinv",
      ),
    ).toBe(true);

    const linkedinLinks = screen.getAllByRole("link", { name: /linkedin/i });
    expect(
      linkedinLinks.some(
        (a) => a.getAttribute("href") === "https://linkedin.com/in/kelwinv",
      ),
    ).toBe(true);

    const emailLink = screen.getByRole("link", { name: /e-mail/i });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:kelwin.v.goncalves@gmail.com",
    );
  });

  it("renders experience from Profile.pdf", () => {
    render(<Home />);
    expect(screen.getAllByText(/iFollow Brasil/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/ENLINE/i)).toBeInTheDocument();
    expect(screen.getByText(/jun\. 2025 – Atual/i)).toBeInTheDocument();
  });
});
