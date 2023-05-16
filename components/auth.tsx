import { Button, Result } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import { removeUser } from "../rtk/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import {useCookies} from "react-cookie"
import {useRouter} from "next/router"
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "./interface";





type propsAuth = {
  handleLogin: Function
}

const Auth:FC<propsAuth> = (props:propsAuth) => {
  let { handleLogin } = props
  const users = useAppSelector(state => state.toolkit.user)

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const router = useRouter()

  const dispatch = useAppDispatch();

  const {register,handleSubmit, formState: {errors}, reset} = useForm<IShippingFields>({mode: "onBlur"})


  const deleteHandler = () => {
    dispatch(removeUser());
    removeCookie('user');
  };

  const onSubmit:SubmitHandler<IShippingFields> = data => {
    handleLogin(data.email, data.password);
    setCookie('user', cookies, {
          path: '/',
        });
    reset()
    router.replace("/");

  }

  return (
    <div>
      {users.email !== null && (
        <div className="2xl:pt-80 md:pt-40 md:pl-20 2xl:pl-96 w-full">
          <div
              className="pl-40"
          >
            <Result
              status="success"
                className="bg-slate-400 w-96 rounded-xl "
              title="Your logged in"
              subTitle="How are you?"
              extra={[
                <Button
                  type="primary"
                  key="console"
                  style={{ backgroundColor: "royalBlue" }}
                >
                  <Link href="/">Home</Link>
                </Button>,
                <Button key="buy" danger onClick={() => deleteHandler()}>
                  Loggout
                </Button>,
              ]}
            />
          </div>
        </div>
      )}
      {users.email === null && (
           <div className="2xl:pt-80 md:pt-40 md:pl-48 2xl:pl-96 w-full">
           <div className="pl-20">
           <div className="bg-slate-400 w-2/5 rounded-xl pr-5 py-5">
 
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="text-3xl pl-12 text-grey">
                 <h1>Log in</h1>
               </div>
             <div className="h-60, pt-5" style={{paddingLeft:"10%"}}>
               <div className="my-2.5">
               <label>
                  Email
                </label>
               <input {...register('email',
                       {
                         required: "Email is require field!",
                         pattern: {
                           value: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
                           message: "Please enter valid email!"
                         }
                       })}
                       style={{color: "black", width: "93%", borderRadius:"5px", paddingLeft: "5px"}}
                 />
                 {errors?.email && (
                   <div style={{color: "red"}}>{errors.email.message}</div>
                 )}
               </div>
               <div>
               <label>
                  Password
                </label>
                 <input {...register('password',
                           {
                             required: "Password is require field!"
                           })}
                     type="password"
                     style={{color: "black", width: "93%", borderRadius:"5px", paddingLeft: "5px"}}
                 />
                 {errors?.password && (
                   <div style={{color: "red"}}>{errors.password.message}</div>
                 )}
             </div>
             <div className="pt-2.5 flex justify-between w-40">
               <button style={{ backgroundColor: "royalblue", width: "50px", borderRadius:"5px" }}>Log in</button>
               or <Link href="/signUp" style={{color: "red"}}>Sign up</Link>
             </div>
             </div>
           </form>
           </div>
           </div>
         </div>
      )}
    </div>
  );
};
export default Auth;
