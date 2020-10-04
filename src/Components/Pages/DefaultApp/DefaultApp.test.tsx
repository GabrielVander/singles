import React from 'react';
import {render} from '@testing-library/react';
import DefaultApp from "./index";

test('matches snapshot', () => {
    const component = render(<DefaultApp/>);

    expect(component).toMatchSnapshot();
})
