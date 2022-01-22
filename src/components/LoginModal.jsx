import React, {useContext, useEffect} from 'react';
import dataContext from './Context';

const datum = useContext(dataContext)



const Login = () => {

    function isAdmin(
        datum.setIsAdmin(true)
    )


    return (
        <div>
            <H2>Log in as Admin?</H2>
            <button onClick={isAdmin}>Yes, login as admin</button>
            <button>No, login general user</button>
        </div>
    );
};

export default Login;