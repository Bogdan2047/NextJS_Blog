import { Card } from "antd";
import { useRouter } from "next/router";
import { Button, Space } from "antd";
import { deleteComment } from "../rtk/slice";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";

const PostInfo:FC = () => {
  const info = useAppSelector(state => state.toolkit.store.posts)
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { id } = router.query;


  return (
    <div 
    className='w-full min-h-screen'
    
    >
      {info.map((item) => {
        if (item) {
          if (item.id === id) {
            return (
              <div
              className="pt-40 md:pl-10 md:pt-20 pl-40 pb-20"
              >
                <div>
                  <Card
                  className="h-96 w-3/4 bg-slate-400"
                    key={item.id}
                  >
                    <div 
                    className="text-center"
                    >
                      <div>
                        <h1 
                          className="text-5xl"
                        >{item.title}</h1>
                      </div>
                      <hr />
                      <br />
                      <div>
                        <h1 
                        className="text-xl"
                        >{item.text}</h1>
                      </div>
                    </div>
                  </Card>
                </div>
                <div 
                className="w-full"
                >
                  {item.commit?.map((elem) => {
                      if (elem !== null) {
                        return (
                          <div
                              className="pt-5 md:pl-16 pl-24"
                          >
                            <div>
                              <Card
                              className="h-15 w-8/12 bg-slate-400"
                              >
                                <div
                                    className="flex justify-between"
                                >
                                  <div 
                                  className="text-white"
                                  >
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
        }else{
          return<></>
        }
      })}
    </div>
  );
};

export default PostInfo;
