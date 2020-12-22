import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import RestorePassword from './apps/main/components/restorePassword';
import StartseiteAdmin from './apps/admin/components/startseite';
import ParentsEvents from './apps/parent/components/events';
import ParentsSicknotes from './apps/parent/components/sicknotes';
import ParentsGrade from './apps/parent/components/grades';
import ParentsPresence from './apps/parent/components/presence';
import ParentsSchema from './apps/parent/components/schema';
import ParentsSchedule from './apps/parent/components/schedule';
import StartseiteStudent from './apps/student/components/startseite';
import SekretariatEvents from './apps/sekretariat/components/events';
import SekretariatSicknotes from './apps/sekretariat/components/sicknotes';
import SekretariatSchedule from './apps/sekretariat/components/schedule';
import AuthentificatedRoute from './AuthentificatedRoutes/AuthentificatedRoute';
import StartseiteTeacher from './apps/teacher/components/startseite';
import NotFound from '../src/apps/main/components/notFound';

const AllowedRoles = {
    TEACHER: 'Lehrender',
    STUDENT: 'Lernender',
    ADMIN: 'Administrator',
    PARENT: 'Eltern',
    SECRETARIAT: 'Sekretariat'
}

function AppRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/login' exact component={Homepage} />
            <Route path='/forgotpassword' exact component={RestorePassword}/>
            <AuthentificatedRoute exact path='/startseite/admin' allowedRole={AllowedRoles.ADMIN} exact component={StartseiteAdmin}/>
            <AuthentificatedRoute exact path='/parent/events' allowedRole={AllowedRoles.PARENT} exact component={ParentsEvents}/>
            <AuthentificatedRoute exact path='/parent/sicknotes' allowedRole={AllowedRoles.PARENT} exact component={ParentsSicknotes}/>
            <AuthentificatedRoute exact path='/parent/schedule' allowedRole={AllowedRoles.PARENT} exact component={ParentsSchedule}/>
            <AuthentificatedRoute exact path='/parent/grades' allowedRole={AllowedRoles.PARENT} exact component={ParentsGrade}/>
            <AuthentificatedRoute exact path='/parent/presence' allowedRole={AllowedRoles.PARENT} exact component={ParentsPresence}/>
            <AuthentificatedRoute exact path='/parent/schema' allowedRole={AllowedRoles.PARENT} exact component={ParentsSchema}/>
            <AuthentificatedRoute exact path='/startseite/student' allowedRole={AllowedRoles.STUDENT} exact component={StartseiteStudent}/>
            <AuthentificatedRoute exact path='/sekretariat/events'  allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatEvents}/>
            <AuthentificatedRoute exact path='/sekretariat/sicknotes'  allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatSicknotes}/>
            <AuthentificatedRoute exact path='/sekretariat/schedule'   allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatSchedule}/>
            <AuthentificatedRoute exact path='/startseite/teacher' allowedRole={AllowedRoles.TEACHER} exact component={StartseiteTeacher}/>
            <Route  component={NotFound}/>

        </Switch >
    );
}
export default AppRouter;