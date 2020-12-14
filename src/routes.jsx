import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import RestorePassword from './apps/main/components/restorePassword';
import StartseiteAdmin from './apps/admin/components/startseite';
import StartseiteParent from './apps/parent/components/startseite';
import StartseiteStudent from './apps/student/components/startseite';
import SekretariatEvents from './apps/sekretariat/components/events';
import SekretariatSicknotes from './apps/sekretariat/components/sicknotes';
import SekretariatSchedule from './apps/sekretariat/components/schedule';
import AuthentificatedRoute from './AuthentificatedRoute';
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
            <AuthentificatedRoute path='/sekretariat/events'  component={SekretariatEvents}/>
            <AuthentificatedRoute path='/sekretariat/sicknotes'  component={SekretariatSicknotes}/>
            <AuthentificatedRoute path='/sekretariat/schedule'  component={SekretariatSchedule}/>
            <Route path='/startseite/teacher' exact component={StartseiteTeacher}/>

        </Switch >
    );
}
export default AppRouter;