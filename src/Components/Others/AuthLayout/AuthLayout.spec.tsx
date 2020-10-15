import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import AuthLayout from "./index";
import Store from "../../../Redux/Store";

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <AuthLayout/>
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
})
