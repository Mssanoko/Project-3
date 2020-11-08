import {createContext} from 'react';

const UserContext = createContext({
    email: "",
    setEmail: () => {},
    loggedIn: true,
    setLoggedIn: () => {}
});

export default UserContext;