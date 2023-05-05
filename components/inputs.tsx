import { getPosts } from "../rtk/slice";
import { Button, Result, Alert } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import Link from "next/link";

const Inputs = () => {
  const [loadings, setLoadings] = useState([]);

  let [input, setInput] = useState("");
  let [text, setText] = useState("");
  const [changeAlert, setChangeAlert] = useState("none");

  const users = useSelector((state:any) => state.toolkit.user);

  const dispatch = useDispatch();

  const { TextArea } = Input;
  const onChangeOne = (e:any) => {
    setInput((input = e.target.value));
  };

  const onChangeTwo = (e:any) => {
    setText((text = e.target.value));
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
    <div style={{ width: "100%" }}>
      {users.email === null && (
        <div
          style={{
            paddingTop: "20%",
            paddingLeft: "20%",
          }}
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
          <div style={{ width: "75%", paddingTop: "20px" }}>
            <Input
              showCount
              maxLength={20}
              onChange={onChangeOne}
              value={input}
            />
            <br />
            <br />
            <TextArea
              showCount
              maxLength={100}
              onChange={onChangeTwo}
              value={text}
            />
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
