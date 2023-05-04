import { useSelector } from "react-redux";
import CardItem from "./cardItem";

const Cards = () => {
  const data = useSelector((state) => state.toolkit.store.posts);
  const users = useSelector((state) => state.toolkit.user);

  return (
    <>
      {users.email === null && <></>}
      {users.email !== null && (
        <div>
          <div
            style={{ paddingTop: "20px", width: "100%", paddingBottom: "20px" }}
          >
            {data === undefined && <></>}
            {data !== undefined &&
              data !== null &&
              data.map((item) => {
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
