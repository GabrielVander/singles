import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import OAuth from "./index";
import Store from "../../../Redux/Store";

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
                <OAuth
                    googleSignIn={jest.fn()}
                    facebookSignIn={jest.fn()}
                    twitterSignIn={jest.fn()}
                    sectionTitle="sectionTitle"
                />
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
})