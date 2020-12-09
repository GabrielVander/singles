// Jest's official workaround for the "window.matchMedia is not a function" error
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../../../Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Logo from './index';

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        </Provider>,
    );
    expect(component).toMatchSnapshot();
});
