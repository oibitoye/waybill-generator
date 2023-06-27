import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
 const history = useHistory();

 useEffect(() => {
 localStorage.removeItem('token');
 localStorage.removeItem('data');
 history.push('/login');
 }, [history]);

 return <div>Logging out...</div>;
};

export default Logout;
