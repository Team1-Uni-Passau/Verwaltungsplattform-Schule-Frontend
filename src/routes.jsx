import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import Aboutus from './apps/main/components/aboutUs';

function AppRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/aboutus' component={Aboutus} />

        </Switch >
    );
}
export default AppRouter;