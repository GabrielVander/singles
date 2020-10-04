import React from 'react';
import {render} from '@testing-library/react';
import CenteredSpin from "./index";

test('matches snapshot', () => {
    const component = render(<CenteredSpin/>);

    expect(component).toMatchSnapshot();
})
