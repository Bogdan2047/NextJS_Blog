import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../rtk/userSlice";
import Register from "../components/register";
import { FC } from "react";


const SignUp:FC = () => {
  const dispatch = useDispatch();

  const handleSignUp = (email:string, password:string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <div style={{ width: "100%", minHeight: "870px" }}>
      <Register handleSignUp={handleSignUp} />
    </div>
  );
};

export default SignUp;
