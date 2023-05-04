import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Result } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../rtk/userSlice";

const Auth = ({ handleLogin }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const users = useSelector((state) => state.toolkit.user);

  console.log(email, password);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeUser());
  };

  const sendData = () => {
    handleLogin(email, password);
  };

  const onChangeOne = (e) => {
    setEmail((email = e.target.value));
  };

  const onChangeTwo = (e) => {
    setPassword((password = e.target.value));
  };

  return (
    <div>
      {users.email !== null && (
        <div>
          <div
            style={{
              paddingTop: "15%",
              paddingLeft: "27%",
            }}
          >
            <Result
              status="success"
              style={{
                backgroundColor: "LightSlateGray ",
                borderRadius: "10px",
                width: "500px",
              }}
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
        <div
          style={{
            paddingTop: "15%",
            paddingLeft: "31%",
          }}
        >
          <div
            style={{
              backgroundColor: "LightSlateGray ",
              padding: "20px 40px",
              borderRadius: "20px",
              width: "350px",
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  onChange={onChangeOne}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={onChangeTwo}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ backgroundColor: "royalBlue" }}
                  onClick={() => sendData()}
                >
                  Log in
                </Button>
                <span style={{ color: "white", paddingLeft: "20px" }}>
                  {" "}
                  Or{" "}
                </span>
                <Link
                  href="/signUp"
                  style={{ color: "red", marginLeft: "10px" }}
                >
                  register now!
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Auth;
