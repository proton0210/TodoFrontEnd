import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/signIN";
import SignupForm from "../../components/signUP";
import { useAuth } from "../../context/AuthContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [signUpComponent, toggleSignUpComponent] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/todo");
    }
  }, [user, navigate]);

  if (user) {
    return null;
  }

  if (signUpComponent) {
    return <SignupForm toggleSignUpComponent={toggleSignUpComponent} />;
  }

  return <SignInForm toggleSignUpComponent={toggleSignUpComponent} />;
};

export default HomePage;
