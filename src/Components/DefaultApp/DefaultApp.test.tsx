import React from 'react';
import {render} from '@testing-library/react';
import DefaultApp from "./index";

test('renders learn react link', () => {
    const {getByText} = render(<DefaultApp/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('matches snapshot', () => {
    const component = render(<DefaultApp/>);

    expect(component).toMatchSnapshot();
})
