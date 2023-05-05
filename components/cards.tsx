import { useSelector } from "react-redux";
import CardItem from "./cardItem";
import { FC } from "react";

const Cards:FC = () => {
  const data = useSelector((state:any) => state.toolkit.store.posts);
  const users = useSelector((state:any) => state.toolkit.user);

  return (
    <>
      {users.email !== null && (
        <div>
          <div
            style={{ paddingTop: "20px", width: "100%", paddingBottom: "20px" }}
          >
            {data === undefined && <></>}
            {data?.map((item:any) => {
              if (item !== null) {
                return (
                  <CardItem
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    key={item.id}
                    commit={item.commit}
                  />
                );
              }
              if (item === null) {
                return <></>;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Cards;
