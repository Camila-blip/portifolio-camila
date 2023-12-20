import React from "react";
import { render, screen } from "@testing-library/react";
import Fatos from ".";
import { SpanFatos } from "../ListaFatos";

describe("Fatos", () => {
    const mock = {
        spanFatos: SpanFatos,
    };

    it("Renderiza o componente Fatos com a props spanFatos", () => {
        render(<Fatos {...mock} />);
        const imgElement = screen.getByAltText("cat") as HTMLImageElement;
        expect(imgElement).toBeInTheDocument();

        mock.spanFatos.map((data, index) => {
            const descricaoElement = screen.getByTestId(`data-${index}`);
            expect(descricaoElement).toBeInTheDocument();
            expect(descricaoElement.textContent).toBe(data);
        });
    });
});
