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
    <div 
    className="2xl:pl-20 md:pl-0"
    >
      {posts?.map(({ title, body, id }) => (
          <Card
            title="Post"
            className="w-4/5 mt-5 bg-slate-400 text-white"
            key={id}
          >
            <div>
              <div 
              className="pt-2.5"
              >
                <h1
                className="text-3xl font-semibold ml-5"
                >
                  {title}
                </h1>
                <span 
                className='text-lg'
                >{body}</span>
                <hr 
                className="mt-2.5"
                />
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default ItemPost;
