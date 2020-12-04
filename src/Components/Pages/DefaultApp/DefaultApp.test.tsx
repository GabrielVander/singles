import React from 'react';
import { render } from '@testing-library/react';
import DefaultApp from './index';
import Store from '../../../Redux/Store';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <DefaultApp />
            </BrowserRouter>
        </Provider>,
    );

    expect(component).toMatchSnapshot();
});
