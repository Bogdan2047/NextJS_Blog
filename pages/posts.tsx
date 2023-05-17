import axios from "axios";
import { useEffect, useState } from "react";
import ItemPost from "../components/itemPost";
import Paginations from "../components/paginations";
import { Space, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { fetchPosts } from "@/rtk/actionCreators";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const dispatch = useAppDispatch()
  const { posts, isLoading, error } = useAppSelector(state => state.toolkit.post)

  console.log(posts);
  

  useEffect(() => {
      dispatch(fetchPosts())
  }, []);


  

//todo: переделать api usestate на redux, 
//пройтись по utility types, 
//исправить any, сделать доп state для loading и ошибки, с thunk и saga
 // разбить по компонентам, инпутс компоненты
 // сделать utils и повиносить все отдельные функции туда
 // переименовать data api
 // заюзать react form
 // заюзать tailwind для css стилей
 // повторить методы промисов
 // использовать куки место slice
 // использовать css
 // оставить global css
 // eslint и prettier


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostsIndex, lastPostIndex);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div  
    className="pt-5 w-full min-h-screen"
    >
      <h1 
      className="text-4xl text-center pr-80"
      >Posts</h1>
      {isLoading && (
        <div  
        className="w-full text-center pr-80 pt-80" 
        >
          <Space>
            <Spin size="large" />
          </Space>
        </div>
      )}
      {error && (
      <div className="text-4xl text-center 2xl:pr-80 2xl:pt-60">
        <h1>{error}</h1>
      </div>
      )}
      {posts && (
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
