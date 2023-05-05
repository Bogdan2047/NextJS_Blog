import { Card } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Space } from "antd";
import { deleteComment } from "../rtk/slice";
import { FC } from "react";

const PostInfo:FC = () => {
  const info = useSelector((state:any) => state.toolkit.store.posts);
  const dispatch = useDispatch();

  const router = useRouter();

  const { id } = router.query;


  return (
    <div style={{ width: "100%", minHeight: "870px" }}>
      {info.map((item:any) => {
        if (item === null) {
          return <></>;
        }
        if (item !== null) {
          if (item.id === id) {
            return (
              <div
                style={{
                  paddingTop: "10%",
                  paddingLeft: "10%",
                  paddingBottom: "5%",
                }}
              >
                <div>
                  <Card
                    style={{
                      height: "400px",
                      backgroundColor: "LightSlateGray ",
                      width: "75%",
                    }}
                    key={item.id}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div>
                        <h1 style={{ fontSize: "40px" }}>{item.title}</h1>
                      </div>
                      <hr />
                      <br />
                      <div>
                        <h1 style={{ fontSize: "20px" }}>{item.text}</h1>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ width: "100%" }}>
                  {item.commit.length > 0 &&
                    item.commit.map((elem:any) => {
                      if (elem !== null) {
                        return (
                          <div
                            style={{
                              paddingTop: "20px",
                              paddingLeft: "5%",
                            }}
                          >
                            <div>
                              <Card
                                style={{
                                  minHeight: "50px",
                                  width: "68%",
                                  backgroundColor: "LightSlateGray ",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div style={{ color: "white" }}>
                                    <h1>{elem.comment}</h1>
                                  </div>
                                  <div>
                                    <Space wrap>
                                      <Button
                                        type="dashed"
                                        danger
                                        onClick={() =>
                                          dispatch(deleteComment(elem.id))
                                        }
                                      >
                                        Delete
                                      </Button>
                                    </Space>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default PostInfo;
