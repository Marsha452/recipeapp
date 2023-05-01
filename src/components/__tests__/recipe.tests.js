import { render, screen, cleanup} from "@testing-library/react";
import Recipe from "../Recipe";

test ('should render recipe component', () => {
    render(<Recipe/>);
    const recipeElement = screen.getByTestId('recipe-card');
    expect(recipeElement).toBeInTheDocument();
})

