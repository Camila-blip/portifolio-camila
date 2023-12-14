import { render, screen } from "@testing-library/react";
import LinhaLaranja from ".";

describe("Linha Laranja", () => {
    it("Renderiza o componente Linha Laranja", () => {
        render(<LinhaLaranja />);
        const LinhaElement = screen.getByRole("div");
        expect(LinhaElement).toBeInTheDocument();
    });
});
