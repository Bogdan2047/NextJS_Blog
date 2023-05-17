import CardItem from "./cardItem";
import { FC } from "react";
import { useAppSelector } from "@/hooks/hook";

const Cards:FC = () => {
  const data = useAppSelector(state => state.toolkit.store.posts)
  const users = useAppSelector(state => state.toolkit.user)

  return (
    <>
      {users.email ? (
        <div>
          <div
          className="pt-5 pb-5 w-full"
          >
            {data === undefined && <></>}
            {data?.map((item) => {
              if (item) {
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
      ):null}
    </>
  );
};
export default Cards;
