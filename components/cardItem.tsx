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
  id: any,
  title: string,
  text: string,
  commit?: any[]
}

const CardItem:FC<propsCard>= (props:propsCard) => {
  const { TextArea } = Input;

  let { id, title, text, commit } = props

  const [change, setChange] = useState("none");
  const [datas, setDatas] = useState("");
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

  const handleTextArea = (e:any) => {
    setDatas((datas) => e.target.value);
  };

  let totalComents = commit?.length || 0;

  return (
    <div style={{ width: "100%" }}>
      <div>
        <div className={styles.posts}>
          <Card
            title="POST"
            key={id}
            style={{
              backgroundColor: "LightSlateGray ",
              marginTop: "10px",
              width: "75%",
            }}
          >
            <Card
              type="inner"
              title="Relevants"
              extra={<Link href={`${id}`}>More</Link>}
              style={{ backgroundColor: "LightSlateGray " }}
            >
              <div>
                <div>
                  <span style={{ fontSize: "30px" }}>{title}</span>
                </div>
                <hr />
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    {text}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Space wrap>
                      <Button danger onClick={() => handleDelete()}>
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
                        onClick={() => handleChangeOne()}
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
            paddingBottom: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "75%",
            }}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{
                height: "30px",
                resize: "none",
                width: "900px",
              }}
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
