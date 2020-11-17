import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/Homepage';

function AppRouter() {
    return (
        <Switch>
            <Route path='/' component={Homepage} />
        </Switch >
    );
}
export default AppRouter;