import { render } from '@testing-library/react';
import BasicModal from '../modal'

const mockedInput = jest.fn();

describe("Modal", () => {
    it('should render modal', () => {
        const { container } = render(
            <BasicModal cards={"john"}/>
        );
        expect(container).toBeInTheDocument();
    });

    it('testing props', () => {
        const { container } = render(
            <BasicModal cards={"john"}/>
        );
        expect(container.querySelector('#modal-modal-description'))
    });

    it('testing props', () => {
        const { container } = render(
            <BasicModal cards={"john"}/>
        );
        expect(container.querySelector('#modal-modal-description')?.innerHTML).toBe(undefined)
    });
    

    it("modal", ()=> {
        var {container} = render(
            <BasicModal cards={"john"}/>
        );
        expect(container).toBeInTheDocument()
    })
    it("check if button renders", ()=> {
        var {container} = render(
            <BasicModal cards={"john"}/>
        );
        expect(container.getElementsByTagName('button').length).toBe(1)
    })
})