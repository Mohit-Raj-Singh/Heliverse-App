import React from "react";

function arr(n) {
  return new Array(n).fill(0);
}
const Pagination = ({ current, total, onChange }) => {
  const page = arr(total).map((a, i) => (
    <button disabled={current == i + 1} key={i} onClick={() => onChange(i + 1)}>
      {i + 1}
    </button>
  ));

  return (
    <>
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginBottom: "10px",
          marginTop: "15px",
        }}
      >
        {page}
      </div>
    </>
  );
};

export default Pagination;
