import {createContext} from 'react';

const UserContext = createContext({
    email: "",
    setEmail: () => {},
    loggedIn: false,
    setLoggedIn: () => {}, 
    name: "",
    setName: () => {}
});

export default UserContext;