import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Store from "../../../Redux/Store";
import FacebookButton from "./index";

// Jest's official workaround for the "window.matchMedia is not a function" error
beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }))
    });
});

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <FacebookButton onClick={jest.fn()}/>
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
})
