import {render} from "@testing-library/react";
import React from "react";
import PageLoader from "./index";

test('matches snapshot', () => {
    const component = render(<PageLoader/>);
    expect(component).toMatchSnapshot();
});
