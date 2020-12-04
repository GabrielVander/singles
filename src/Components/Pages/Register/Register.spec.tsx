import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import Store from '../../../Redux/Store';
import {FirebaseAppProvider} from 'reactfire';
import FirebaseConfig from '../../../Configurations/FirebaseConfig';
import React, {Suspense} from 'react';
import Loader from 'react-loader-spinner';
import {BrowserRouter} from 'react-router-dom';
import Register from './index';

test('matches snapshot', () => {
    const component = render(
        <Provider store={Store.store}>
            <FirebaseAppProvider firebaseConfig={FirebaseConfig.config}>
                <Suspense fallback={<Loader type="RevolvingDot" />}>
                    <BrowserRouter>
                        <Register />
                    </BrowserRouter>
                </Suspense>
            </FirebaseAppProvider>
        </Provider>,
    );

    expect(component).toMatchSnapshot();
});
