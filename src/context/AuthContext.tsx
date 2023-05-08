import { createContext, useState, useEffect, useContext } from "react";
interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}
export const AuthContext = createContext<{
  user: null | any;
  setUser: (user: null | any) => void;
}>({
  user: null,
  setUser: () => {},
});

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => useContext(AuthContext);

export { AuthProvider, useAuth };
