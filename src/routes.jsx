import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import RestorePassword from './apps/main/components/restorePassword';


function AppRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/forgotpassword' exact component={RestorePassword} />

        </Switch >
    );
}
export default AppRouter;