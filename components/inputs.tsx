import { getPosts } from "../rtk/slice";
import { Button, Result, Alert } from "antd";
import { FC, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import InputField from "./input"
import TextAreaField from "./textarea";


const Inputs:FC = () => {
  const [loadings, setLoadings] = useState<any[]>([]);

  let [input, setInput] = useState<string>("");
  let [text, setText] = useState<string>("");
  const [changeAlert, setChangeAlert] = useState<string>("none");

  const users = useAppSelector(state => state.toolkit.user);

  const dispatch = useAppDispatch();

  const onChangeOne = (e:any) => {
    setInput((e.target.value));
  };

  const onChangeTwo = (e:any) => {
    setText((e.target.value));
  };

  const sendPost = () => {
    enterLoading(0);
    if (input === "") {
      setChangeAlert("flex");
    }
    if (text === "") {
      setChangeAlert("flex");
    }
    if (input === "" && text === "") {
      setChangeAlert("flex");
    }
    if (input !== "" && text !== "") {
      dispatch(getPosts(datas));
      setChangeAlert("none");
      setInput(""), setText("");
    }
  };

  let datas = {
    id: new Date().toISOString(),
    title: input,
    text: text,
  };

  const enterLoading = (index:any) => {
    setLoadings((prevLoadings) => {
      const newLoadings:any = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings:any = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };


  return (
    <div 
    className="w-full"
    >
      {users.email === null && (
        <div
        className="pt-80 md:pt-40 pl-20 md:pl-36 w-full"
        >
          <Result
            title="Your not logged in"
            style={{
              borderRadius: "10px",
              width: "500px",
              backgroundColor: "LightSlateGray ",
            }}
            extra={
              <Button
                type="primary"
                key="console"
                style={{ backgroundColor: "royalblue" }}
              >
                <Link href="/login">LOGGED IN</Link>
              </Button>
            }
          />
        </div>
      )}
      {users.email && (
        <>
          <div style={{ width: "100%" }}>
            <Alert
              message="Warning"
              description="Youre not fill field"
              type="warning"
              showIcon
              style={{
                display: `${changeAlert}`,
                flexDirection: "row",
                width: "75%",
                paddingTop: "20px",
              }}
            />
          </div>
          <div className="md:w-9/12 2xl:w-3/5 pt-10">
            <div>
            <InputField onChangeOne={onChangeOne} setInput={input}/>
            </div>
            <br />
            <br />
            <TextAreaField onChangeTwo={onChangeTwo} setText={text}/>
            <div style={{ paddingTop: "20px" }}>
              <Button
                type="primary"
                loading={loadings[0]}
                onClick={() => sendPost()}
                style={{ backgroundColor: "royalBlue" }}
              >
                Click me!
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Inputs;
