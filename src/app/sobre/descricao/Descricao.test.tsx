import React from "react";
import { render, screen } from "@testing-library/react";
import Descricao from ".";
import { PDescricao } from "../ListaFatos";

describe("Descricao", () => {
    const mock = {
        PDescricao: PDescricao,
    };
    it("Renderiza o componente Descricao com a props PDescricao", () => {
        render(<Descricao {...mock} />);
        mock.PDescricao.map((data, index) => {
            const descricaoElement = screen.getByTestId(`data-${index}`);
            expect(descricaoElement).toBeInTheDocument();
            expect(descricaoElement.textContent).toBe(data);
        });
    });
});
