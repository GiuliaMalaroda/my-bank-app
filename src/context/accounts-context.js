import { createContext, useState } from 'react';

export const AccountsContext = createContext();

export const AccountsProvider = ({ children }) => {
    const [accounts,setAccounts] = useState([
        {
            name: "Jane Doe",
            email: "jane@me.com",
            password: "Access123",
            balance: 148.5,
            movements: [
                { balance: 148.5 }
            ]
        },
        {
            name: "Peter Parker",
            email: "peter@mit.edu",
            password: "Passcode321",
            balance: 67.3,
            movements: [
                { balance: 67.3 }
            ]
        },
        {
            name: "John Smith",
            email: "john@msn.com",
            password: "Letmein33",
            balance: 245.78,
            movements: [
                { balance: 245.78 }
            ]
        }
    ]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInAccount, setLoggedInAccount] = useState({});

    const value = {
        accounts,
        setAccounts,
        isLoggedIn,
        setIsLoggedIn,
        loggedInAccount,
        setLoggedInAccount
    }

    return (
        <AccountsContext.Provider
            value={value} >
            {children}
        </AccountsContext.Provider>
    );
};