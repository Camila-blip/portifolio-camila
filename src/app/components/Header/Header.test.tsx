import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
    it("Renderiza o componente header", () => {
        const { getByAltText, getByText } = render(<Header />);

        //selecionar o alt da imagem
        const logoImage = getByAltText("Logo TechFox");
        expect(logoImage).toBeInTheDocument();

        //se os links estão no componente
        const homeLink = getByText("Home");
        expect(homeLink).toBeInTheDocument();

        const sobreLink = getByText("Sobre");
        expect(sobreLink).toBeInTheDocument();

        const portifolioLink = getByText("Portifólio");
        expect(portifolioLink).toBeInTheDocument();
    });
});
