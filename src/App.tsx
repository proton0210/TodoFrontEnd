import SignInForm from "./components/signIN";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <SignInForm />
      </AuthProvider>
    </>
  );
}

export default App;
