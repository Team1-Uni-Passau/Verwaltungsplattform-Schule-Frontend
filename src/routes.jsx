import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Homepage from './apps/main/components/Homepage';
import RestorePassword from './apps/main/components/restorePassword';
// import AdminStartseite from './apps/admin/components/createuser';
import ParentsEvents from './apps/parent/components/events';
import ParentsSicknotes from './apps/parent/components/sicknotes';
import ParentsGrade from './apps/parent/components/grades';
import ParentsPresence from './apps/parent/components/presence';
import ParentsSchema from './apps/parent/components/schema';
import ParentsSchedule from './apps/parent/components/schedule';

import SekretariatEvents from './apps/sekretariat/components/events';
import SekretariatSicknotes from './apps/sekretariat/components/sicknotes';
import SekretariatSchedule from './apps/sekretariat/components/schedule';
import SekretariatManageClass from './apps/sekretariat/components/ManageClass';
import SekretariatChangeRoll from './apps/sekretariat/components/changeroll';
import SekretariatCreateStudent from './apps/admin/components/createstudent';
import AuthentificatedRoute from './AuthentificatedRoutes/AuthentificatedRoute';
import Notenschema from './apps/teacher/components/notenschema';
// import StartseiteTeacher from './apps/teacher/components/startseite';
import NotFound from '../src/apps/main/components/notFound';

import AdminEvents from './apps/sekretariat/components/events';
import AdminSchedule from './apps/sekretariat/components/schedule';
import AdminSicknotes from './apps/sekretariat/components/sicknotes';
import AdminCreateStudent from './apps/admin/components/createstudent';
import AdminChangeRoll  from './apps/admin/components/changeroll';
import AdminManageClass from './apps/sekretariat/components/ManageClass';

import TeacherEvents from './apps/teacher/components/events';
import TeacherExams from './apps/teacher/components/exams';
import TeacherSchedule from './apps/teacher/components/schedule';
import TeacherSicknotes from './apps/teacher/components/sicknotes';
import TeacherViewClasses from './apps/teacher/components/viewclasses';
import TeacherGrades from './apps/teacher/components/grades';

import StudentEvents from './apps/student/components/events';
import StudentGrades from './apps/student/components/grades';

import StudentSchedule from './apps/student/components/schedule';


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
            {/* <AuthentificatedRoute exact path='/admin/startseite' allowedRole={AllowedRoles.ADMIN} exact component={AdminStartseite}/> */}
            <AuthentificatedRoute exact path='/parent/events' allowedRole={AllowedRoles.PARENT} exact component={ParentsEvents}/>
            <AuthentificatedRoute exact path='/parent/sicknotes' allowedRole={AllowedRoles.PARENT} exact component={ParentsSicknotes}/>
            <AuthentificatedRoute exact path='/parent/schedule' allowedRole={AllowedRoles.PARENT} exact component={ParentsSchedule}/>
            <AuthentificatedRoute exact path='/parent/grades' allowedRole={AllowedRoles.PARENT} exact component={ParentsGrade}/>
            <AuthentificatedRoute exact path='/parent/presence' allowedRole={AllowedRoles.PARENT} exact component={ParentsPresence}/>
            <AuthentificatedRoute exact path='/parent/schema' allowedRole={AllowedRoles.PARENT} exact component={ParentsSchema}/>
            
            <AuthentificatedRoute exact path='/sekretariat/events'  allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatEvents}/>
            <AuthentificatedRoute exact path='/sekretariat/sicknotes'  allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatSicknotes}/>
            <AuthentificatedRoute exact path='/sekretariat/schedule'   allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatSchedule}/>
            <AuthentificatedRoute exact path='/sekretariat/manageclass' allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatManageClass}/>
            <AuthentificatedRoute exact path='/sekretariat/changeroll' allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatChangeRoll}/>
            <AuthentificatedRoute exact path='/sekretariat/createstudent' allowedRole={AllowedRoles.SECRETARIAT} component={SekretariatCreateStudent}/>

            <AuthentificatedRoute exact path='/teacher/events' allowedRole={AllowedRoles.TEACHER} exact component={TeacherEvents}/>
            <AuthentificatedRoute exact path='/teacher/exams' allowedRole={AllowedRoles.TEACHER} exact component={TeacherExams}/>
            <AuthentificatedRoute exact path='/teacher/schedule' allowedRole={AllowedRoles.TEACHER} exact component={TeacherSchedule}/>
            <AuthentificatedRoute exact path='/teacher/sicknotes' allowedRole={AllowedRoles.TEACHER} exact component={TeacherSicknotes}/>
            <AuthentificatedRoute exact path='/teacher/viewclasses' allowedRole={AllowedRoles.TEACHER} exact component={TeacherViewClasses}/>
            <AuthentificatedRoute exact path='/teacher/schema' allowedRole={AllowedRoles.TEACHER} component={Notenschema}/>
            <AuthentificatedRoute exact path='/teacher/grades' allowedRole={AllowedRoles.TEACHER} exact component={TeacherGrades}/>

            <AuthentificatedRoute exact path='/admin/events' allowedRole={AllowedRoles.ADMIN} exact component={AdminEvents}/>
            <AuthentificatedRoute exact path='/admin/schedule' allowedRole={AllowedRoles.ADMIN} exact component={AdminSchedule}/>
            <AuthentificatedRoute exact path='/admin/sicknotes' allowedRole={AllowedRoles.ADMIN} exact component={AdminSicknotes}/>
            <AuthentificatedRoute exact path='/admin/createstudent' allowedRole={AllowedRoles.ADMIN} exact component={AdminCreateStudent}/>
            <AuthentificatedRoute exact path='/admin/changeroll' allowedRole={AllowedRoles.ADMIN} exact component={AdminChangeRoll}/>
            <AuthentificatedRoute exact path='/admin/manageclass' allowedRole={AllowedRoles.ADMIN} exact component={AdminManageClass}/>

            <AuthentificatedRoute exact path='/student/events' allowedRole={AllowedRoles.STUDENT} exact component={StudentEvents}/>
            <AuthentificatedRoute exact path='/student/grades' allowedRole={AllowedRoles.STUDENT} exact component={StudentGrades}/>
            
            <AuthentificatedRoute exact path='/student/schedule' allowedRole={AllowedRoles.STUDENT} exact component={StudentSchedule}/>
            
            <Route  component={NotFound}/>

        </Switch >
    );
}
export default AppRouter;