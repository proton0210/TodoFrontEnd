// import SignInForm from "./components/signIN";
import SignupForm from "./components/signUP";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <SignupForm />
      </AuthProvider>
    </>
  );
}

export default App;
