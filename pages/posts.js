import axios from "axios";
import { useEffect, useState } from "react";
import ItemPost from "../components/itemPost";
import Paginations from "../components/paginations";
import { Space, Spin } from "antd";

const src = "https://jsonplaceholder.typicode.com/posts/";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      await axios.get(src).then((data) => {
        setPosts(data.data);
      });
      setLoading(false);
    };
    getPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostsIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <ItemPost posts={currentPost} loading={loading} />
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
