import styles from "../styles/other.module.css";

const Paginations = ({ defaultCurrent, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / defaultCurrent); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.length === 0 && <></>}
      {pageNumbers.length > 0 && (
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
      )}
    </>
  );
};

export default Paginations;
