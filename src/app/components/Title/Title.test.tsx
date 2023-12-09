import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title", () => {
    const mock = {
        component: "ComponentName",
        title: "TitleText",
    };
    it("Renderiza o componente title com as props component e title", () => {
        render(<Title {...mock} />);

        const titleElement = screen.getByText(new RegExp(mock.title, "i"));
        expect(titleElement).toBeInTheDocument();

        const componentElement = screen.getByText(
            new RegExp(mock.component, "i")
        );
        expect(componentElement).toBeInTheDocument();
    });
});
