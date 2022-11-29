import { render } from '@testing-library/react';
import CarersCard from '../carersCard'
import carers from '../../../mocks/carers.json'

test("check if the correct amout of elements is rendering based on the mock", () => {
    const { container } = render(<CarersCard cards={carers.carers}/>);
    expect(container).toBeInTheDocument();
});

test("ccheck if the amount of titles is consistent with the mock", () => {
    const { container } = render(<CarersCard cards={carers.carers} />);
    expect(container.getElementsByClassName('card-title').length).toBe(8);
});

test("check for the buttons", () => {
    const { container } = render(<CarersCard cards={carers.carers} />);
    expect(container.getElementsByClassName('toggle-info').length).toBe(8);
});

test("check for the buttons", () => {
    const { container } = render(<CarersCard cards={carers.carers} />);
    expect(container.getElementsByTagName('img').length).toBe(8);
});

//  it('should fetch and render input element', async () => {
//         render(
//             <CarersCard cards={carers.carers} />
//         );
//         const followerDivElement = await screen.getByRole("")
//         expect(followerDivElement).toBeInTheDocument();
//     });
// })