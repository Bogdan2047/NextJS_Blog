import { Button, Checkbox, Col, Form, Input, Row, Select, Result } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../rtk/userSlice";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};



type propsRegist = {
  handleSignUp: any,
}

const Register:FC<propsRegist> = (props:propsRegist) => {
  let { handleSignUp } = props
  const [form] = Form.useForm();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const users = useSelector((state:any) => state.toolkit.user);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeUser());
  };

  const sendData = () => {
    handleSignUp(email, password);
  };

  const onChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((email = event.target.value));
  };

  const onChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((password = event.target.value));
  };

  // const onFinish = (values = {}) => {
  //   console.log(values);
  // };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="380">+380</Option>
        <Option value="044">+044</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      {users.email !== null && (
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
              width: "500px",
              borderRadius: "10px",
            }}
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
              <Button key="buy" danger onClick={() => deleteHandler()}>
                Loggout
              </Button>,
            ]}
          />
        </div>
      )}
      {users.email === null && (
        <div
          style={{
            paddingTop: "10%",
            paddingLeft: "25%",
          }}
        >
          <div
            style={{
              backgroundColor: "LightSlateGray ",
              padding: "30px 40px",
              borderRadius: "20px",
              width: "580px",
            }}
          >
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              // onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "380",
              }}
              style={{
                maxWidth: 600,
                color: "white",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                label="E-mail"
                onChange={onChangeOne}
                style={{ color: "white" }}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Repeat Password"
                dependencies={["password"]}
                onChange={onChangeTwo}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Please input the captcha you got!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button
                      style={{ backgroundColor: "royalBlue", color: "white" }}
                    >
                      Get captcha
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "royalBlue" }}
                  onClick={sendData}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};
export default Register;
