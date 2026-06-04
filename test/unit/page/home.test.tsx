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
      screen.getByRole("heading", { name: /recomendações/i }),
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
    expect(screen.getAllByText(/ENLINE/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/jun\. 2025 – Atual/i)).toBeInTheDocument();
  });

  it("renders Grupo Prime experience with pleno tenure in period", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Grupo Prime/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/set\. 2023 – mai\. 2025 · pleno desde jan\/2024/i),
    ).toBeInTheDocument();
  });

  it("renders ENLINE experience with pleno tenure in period", () => {
    render(<Home />);
    expect(
      screen.getByText(/jul\. 2021 – ago\. 2023 · pleno desde mai\/2022/i),
    ).toBeInTheDocument();
  });

  it("renders LinkedIn recommendations section", () => {
    render(<Home />);
    expect(screen.getByText(/Samuel Sousa/i)).toBeInTheDocument();
    expect(screen.getByText(/Rafael Gomes/i)).toBeInTheDocument();
    expect(
      screen.getByText(/proatividade fará uma diferença positiva/i),
    ).toBeInTheDocument();
    const linkedinLink = screen.getByRole("link", {
      name: /ver todas no linkedin/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/kelwinv/details/recommendations/",
    );
  });

  it("renders corporate highlights section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /destaques corporativos/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        name: /Sistema de Monitoramento de alertas/i,
      }).length,
    ).toBeGreaterThan(0);
  });

  it("renders languages including Spanish", () => {
    render(<Home />);
    expect(screen.getByText(/Espanhol/i)).toBeInTheDocument();
    expect(screen.getByText(/Em evolução/i)).toBeInTheDocument();
  });
});
