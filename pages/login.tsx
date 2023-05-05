import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../rtk/userSlice";
import Auth from "../components/auth";
import {FC} from "react"


const Login:FC = () => {
  const dispatch = useDispatch();

  const handleLogin = (email:any, password:any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password,)
      .then(({ user }) => {
        console.log(user)
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
      <Auth handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
