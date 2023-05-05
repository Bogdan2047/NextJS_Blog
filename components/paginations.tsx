import { FC } from "react";
import styles from "../styles/other.module.css";

type propsPagin = {
  defaultCurrent: number,
  total: number,
  paginate: any
}

const Paginations:FC<propsPagin> = (props:propsPagin) => {

let { defaultCurrent, total, paginate } = props

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / defaultCurrent); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.length ? (
        <div
          style={{
            display: "flex",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "10%",
          }}
        >
          {pageNumbers.map((number) => (
            <li
              className={styles.click}
              key={number}
              style={{
                listStyleType: "none",
                cursor: "pointer",
                marginLeft: "3px",
                width: "25px",
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: "2px",
              }}
            >
              <a onClick={() => paginate(number)}>
                <span
                  style={{
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {number}
                </span>
              </a>
            </li>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Paginations;
