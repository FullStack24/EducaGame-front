import Login from '@/app/login/page';
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type user = { name: string; email: string; role: string } | null;
interface AuthContextType {
    isAuthenticated: boolean;
    user: user
    login: (user: user) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<user>(null);

    const login = (user: user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const isAuthenticated = useMemo(() => !!user , [user])

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
        {isAuthenticated? <>   {children}</> : <Login/>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};