import { Card } from "antd";
import { FC } from "react";

type postsProps = {
  title: string,
  body: string,
  id: string
}

type postProps = {
  posts: postsProps[]
}

const ItemPost:FC<postProps>= ({ posts }) => {
  return (
    <div style={{ paddingLeft: "10%" }}>
      {posts?.map(({ title, body, id }) => (
          <Card
            title="Post"
            style={{
              width: "70%",
              backgroundColor: "LightSlateGray ",
              color: "white",
              marginTop: "20px",
            }}
            key={id}
          >
            <div>
              <div style={{ paddingTop: "10px" }}>
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    marginLeft: "20px",
                  }}
                >
                  {title}
                </h1>
                <span style={{ fontSize: "18px" }}>{body}</span>
                <hr style={{ marginTop: "10px" }} />
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default ItemPost;
