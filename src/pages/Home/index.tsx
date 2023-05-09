import { useState } from "react";
import SignupForm from "../../components/signUP";
import SignInForm from "../../components/signIN";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user) {
    navigate("/todo");
    return null;
  }

  const [signUpComponent, toggleSignUpComponent] = useState(false);
  if (signUpComponent)
    return <SignupForm toggleSignUpComponent={toggleSignUpComponent} />;
  return <SignInForm toggleSignUpComponent={toggleSignUpComponent} />;
};

export default HomePage;
