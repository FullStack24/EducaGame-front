import Login from '@/app/login/page';
import LoadingComponent from '@/globalComponents/loading-component';
import { useRouter } from 'next/navigation';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';

type user = { name: string; email: string; role: string; id: number } | null;
interface AuthContextType {
  isAuthenticated: boolean;
  user: user;
  saveUserInfo: (user: user) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    }
    setLoading(false);
  }, []);

  const saveUserInfo = (user: user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, saveUserInfo, logout }}
    >
      {loading ? (
        <LoadingComponent />
      ) : isAuthenticated ? (
        <> {children}</>
      ) : (
        <Login />
      )}
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
