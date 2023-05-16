import { FC } from "react";

type propsPagin = {
  defaultCurrent: number,
  total: number,
  paginate: Function
}

const Paginations:FC<propsPagin> = (props:propsPagin) => {

let { defaultCurrent, total, paginate } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / defaultCurrent); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.length ? (
        <div
        className="flex pt-5 pb-5 2xl:pl-20 md:pl-0"
        >
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="w-6 text-center list-none bg-white ml-0.5 cursor-pointer rounded-sm hover:bg-amber-600"
            >
              <a onClick={() => paginate(number)}>
                <span
                className="text-black font-semibold hover:text-white"
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
