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

  it("renders the audited dashboard result in the hero pitch", () => {
    render(<Home />);
    expect(
      screen.getByText(/Na iFollow, reduzi o carregamento de um dashboard/i),
    ).toBeInTheDocument();
  });

  it("renders contact location and phone", () => {
    render(<Home />);
    expect(screen.getAllByText(/Osasco, São Paulo/i).length).toBeGreaterThan(0);
  });

  it("renders link to study projects", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /ver projetos de estudo/i });
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

  it("renders audited employment dates", () => {
    render(<Home />);
    expect(screen.getAllByText(/iFollow Brasil/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ENLINE/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/jun\. 2025 – ago\. 2026/i)).toBeInTheDocument();
  });

  it("renders Grupo Prime experience with pleno tenure in period", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Grupo Prime/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/set\. 2023 – mai\. 2025 · pleno desde jan\. 2024/i),
    ).toBeInTheDocument();
  });

  it("renders ENLINE experience with pleno tenure in period", () => {
    render(<Home />);
    expect(
      screen.getByText(/jul\. 2021 – ago\. 2023 · pleno desde mai\. 2022/i),
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

  it("renders verified product cases without discarded claims", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /casos de produto/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /dashboard de monitoramento/i }),
    ).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent(
      /99,3%|30% nos custos|2\.000 usuários|300\+ itens/i,
    );
  });

  it("renders languages including Spanish", () => {
    render(<Home />);
    expect(screen.getByText(/Espanhol/i)).toBeInTheDocument();
    expect(screen.getByText(/Em evolução/i)).toBeInTheDocument();
  });
});
