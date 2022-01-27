import React, {useContext} from 'react';
import dataContext from './Context';
import AdminPage from './adminComponents/AdminPage';
import FeedbackForm from './FeedbackForm';
import Header from './adminComponents/Header';


const Body = () => {

    const datum= useContext(dataContext)

    return (
       
        <body className='main-body'>
          <Header />
          
          {datum.isAdmin === false ?
            ( <FeedbackForm /> ) : 
            ( <AdminPage /> )}
          
        </body>
    );
};

export default Body;