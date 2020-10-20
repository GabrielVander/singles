import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import Store from "../../../Redux/Store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Hero from "./index";

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <BrowserRouter>
                <Hero size="small"/>
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
});
