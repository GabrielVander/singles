import React from 'react';
import DefaultApp from "./Components/DefaultApp";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <DefaultApp/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
