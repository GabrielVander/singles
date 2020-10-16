import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Store from "../../../Redux/Store";
import TwitterButton from "./index";

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <TwitterButton onClick={jest.fn()}/>
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
})
