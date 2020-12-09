import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import RestorePassword from './apps/main/components/restorePassword';
import StartseiteAdmin from './apps/admin/components/startseite';
import StartseiteParent from './apps/parent/components/startseite';
import StartseiteStudent from './apps/student/components/startseite';
import StartseiteSekretariat from './apps/sekretariat/components/startseite';
import StartseiteTeacher from './apps/teacher/components/startseite';

function AppRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/login' exact component={Homepage} />
            <Route path='/forgotpassword' exact component={RestorePassword}/>
            <Route path='/startseite/admin' exact component={StartseiteAdmin}/>
            <Route path='/startseite/parent' exact component={StartseiteParent}/>
            <Route path='/startseite/student' exact component={StartseiteStudent}/>
            <Route path='/startseite/sekretariat' exact component={StartseiteSekretariat}/>
            <Route path='/startseite/teacher' exact component={StartseiteTeacher}/>

        </Switch >
    );
}
export default AppRouter;