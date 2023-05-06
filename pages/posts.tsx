import axios from "axios";
import { FC, useEffect, useState } from "react";
import ItemPost from "../components/itemPost";
import Paginations from "../components/paginations";
import { Space, Spin } from "antd";

const Posts:FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  useEffect(() => {
    const getPosts = () => {
      axios.get("/api/postsData").then((data) => {
        setPosts(data.data);
      });
    };
    getPosts();
  }, []);


  

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostsIndex, lastPostIndex);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div style={{ paddingTop: "20px", width: "100%", minHeight: "870px" }}>
      <h1 style={{ fontSize: "40px", paddingLeft: "38%" }}>Posts</h1>
      {posts.length === 0 && (
        <div style={{ paddingLeft: "40%", paddingTop: "20%" }}>
          <Space>
            <Spin size="large" />
          </Space>
        </div>
      )}
      {posts.length > 0 && (
        <div>
          <div>
            <ItemPost posts={currentPost} />
          </div>
          <div>
            <Paginations
              defaultCurrent={postsPerPage}
              total={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
