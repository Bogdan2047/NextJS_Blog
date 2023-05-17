import { FC, useState } from "react";
import { Button, Space } from "antd";
import { deletePost } from "@/rtk/slice";
import { Card } from "antd";
import Link from "next/link";
import { Input } from "antd";
import { getCommit } from "../rtk/slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/posts.module.css";


type propsCard = {
  id: string | any,
  title: string | undefined,
  text: string | undefined,
  commit?: string[] | any[] | undefined,
}

const CardItem:FC<propsCard>= (props:propsCard) => {
  const { TextArea } = Input;

  let { id, title, text, commit } = props

  const [change, setChange] = useState<string>("none");
  const [datas, setDatas] = useState<string>("");
  const dispatch = useDispatch();

  const handleChangeOne = () => {
    setChange("block");
  };

  const handleChangeTwo = (id:string) => {
    const sendDatas = {
      id: id,
      text: datas,
    };
    if (datas !== "") {
      dispatch(getCommit(sendDatas));
      setDatas("");
    }
    setChange("none");
  };

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  const handleTextArea = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setDatas((datas) => event.target.value);
  };

  let totalComents = commit?.length || 0;

  return (
    <div className="w-full">
      <div
      className=" 2xl:w-3/5 md:w-9/12 mt-2.5"
      >
        <div>
          <Card
            title="POST"
            key={id}
            className="bg-slate-400 mt-2.5"
          >
            <Card
              type="inner"
              title="Relevants"
              extra={<Link href={`${id}`}>More</Link>}
              className="bg-slate-400"
            >
              <div>
                <div>
                  <span 
                    className="text-3xl"
                  >{title}</span>
                </div>
                <hr />
                <div>
                  <p
                    className="text-xl pb-5"
                  >
                    {text}
                  </p>
                </div>
                <div
                className="flex justify-between"
                >
                  <div>
                    <Space wrap>
                      <Button danger onClick={handleDelete}>
                        Delete
                      </Button>
                    </Space>
                  </div>
                  <div>
                    {commit === undefined && <></>}
                    {commit?.length ? (
                      <div>
                        <h1>comments: {totalComents}</h1>
                      </div>
                    ):undefined}
                  </div>
                  <div>
                    <Space wrap>
                      <Button
                        type="primary"
                        style={{ backgroundColor: "royalblue" }}
                        onClick={handleChangeOne}
                      >
                        Add comment
                      </Button>
                    </Space>
                  </div>
                </div>
              </div>
            </Card>
          </Card>
        </div>
        <div
          key={id}
          style={{
            display: `${change}`,
            paddingTop: "20px",
          }}
        >
          <div
          className="flex justify-between 2xl:w-6/6"
          >
            <TextArea
              showCount
              maxLength={100}
              className="h-8 w-5/6"
              value={datas}
              onChange={handleTextArea}
              placeholder="disable resize"
            />

            <Space wrap>
              <Button
                type="primary"
                style={{ backgroundColor: "royalblue" }}
                onClick={() => handleChangeTwo(id)}
              >
                send
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
