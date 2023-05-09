import { Auth } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  username: string;
  email: string;
  id: string;
  name: string;
};
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
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const user = {
          username: authUser.username,
          email: authUser.attributes.email,
          id: authUser.attributes.sub,
          name: authUser.attributes.given_name,
        };
        setUser(user);
      } catch (error) {
        console.log("No user is authenticated");
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => useContext(AuthContext);

export { AuthProvider, useAuth };
