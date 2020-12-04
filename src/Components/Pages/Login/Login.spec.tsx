import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import Store from '../../../Redux/Store';
import {BrowserRouter} from 'react-router-dom';
import React, {Suspense} from 'react';
import Login from './index';
import FirebaseConfig from '../../../Configurations/FirebaseConfig';
import {FirebaseAppProvider} from 'reactfire';
import Loader from 'react-loader-spinner';

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <FirebaseAppProvider firebaseConfig={FirebaseConfig.config}>
                <Suspense fallback={<Loader type="RevolvingDot" />}>
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                </Suspense>
            </FirebaseAppProvider>
        </Provider>,
    );

    expect(component).toMatchSnapshot();
});
