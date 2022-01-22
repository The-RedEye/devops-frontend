import React from 'react';
import { Route} from "react-router-dom";
import Dashboard from '../navBar/Dashboard'
import Today from '../navBar/Today'
import Upcoming from '../navBar/Upcoming'
import Completed from '../navBar/Completed'
import Settings from '../navBar/Settings'

const AdminRouter = () => {
    return (
        <div>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/today" component={Today} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/completed" component={Completed} />
        </div>
    );
};

export default AdminRouter;