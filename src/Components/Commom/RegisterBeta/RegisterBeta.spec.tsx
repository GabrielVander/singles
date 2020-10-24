import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import Store from "../../../Redux/Store";
import {BrowserRouter} from "react-router-dom";
import React, {Suspense} from "react";
import RegisterBeta from "./index";
import FirebaseConfig from "../../../Configurations/FirebaseConfig";
import Loader from "react-loader-spinner";
import {FirebaseAppProvider} from "reactfire";

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <FirebaseAppProvider
                firebaseConfig={FirebaseConfig.config}>
                <Suspense fallback={
                    <Loader
                        type="RevolvingDot"
                    />
                }>
                    <BrowserRouter>
                        <RegisterBeta/>
                    </BrowserRouter>
                </Suspense>
            </FirebaseAppProvider>
        </Provider>
    );
    expect(component).toMatchSnapshot();
});
