import Link from "next/link";
import { FC, useState } from "react";
import { removeUser } from "../rtk/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import {useCookies} from "react-cookie"
import {useRouter} from "next/router"
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "./interface";
import { Button, Result } from "antd";
import { cookies } from "next/dist/client/components/headers";





type propsRegist = {
  handleSignUp: Function,
}

const Register:FC<propsRegist> = (props:propsRegist) => {

  const router = useRouter()

  
  let { handleSignUp } = props

  const users = useAppSelector(state => state.toolkit.user);

  const [cookies, setCookie, removeCookie] = useCookies(['regist'])


  const dispatch = useAppDispatch();

  const {register,handleSubmit, formState: {errors}, reset} = useForm<IShippingFields>({mode: "onBlur"})

  const onSubmit:SubmitHandler<IShippingFields> = data => {
    handleSignUp(data.email, data.password);
    setCookie('regist', cookies, {
          path: '/',
        });
    reset()
    router.replace("/");

  }

  const deleteHandler = () => {
    dispatch(removeUser());
    removeCookie('regist');

  };
  
  return (
    <>
      {users.email !== null &&(
        <div className="2xl:pt-80 md:pt-40 md:pl-28 2xl:pl-96 w-full">
        <div
              className="pl-40"

        >
          <Result
            status="success"
            className="bg-slate-400 w-96 rounded-xl "
            
            title="Successfully Registred"
            subTitle="Welcome !!!"
            extra={[
              <Button
                type="primary"
                key="console"
                style={{ backgroundColor: "royalBlue" }}
              >
                <Link href="/">Home</Link>
              </Button>,
              <Button key="buy" danger onClick={deleteHandler}>
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
                <h1>Sign up</h1>
              </div>
            <div className="h-60, pt-5" style={{paddingLeft:"10%"}}>
              <div >
                <label>
                  Display name
                </label>
              <input {...register('name',
                          {
                            required: "Name is require field!"
                          })}
                      style={{color: "black", width: "93%", borderRadius:"5px", paddingLeft: "5px"}}
                      />
                      {errors?.name && (
                        <div style={{color: "red"}}>{errors.name.message}</div>
                      )}
              </div>
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
            <div className="pt-2.5">
              <button style={{ backgroundColor: "royalblue", width: "70px", borderRadius:"5px" }}>Sign up</button>
            </div>
            </div>
          </form>
          </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Register;
