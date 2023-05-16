import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../rtk/userSlice";
import Auth from "../components/auth";
import {FC} from "react"
import { useAppDispatch } from "@/hooks/hook";


const Login:FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email:string, password:string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password,)
      .then(({user}) => {
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
    <div 
    className="w-full min-h-screen"
    >
      <Auth handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
