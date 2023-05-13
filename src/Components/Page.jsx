import styles from "./UserCard.module.css";

function Page({ onChange, current, total }) {
  const prev = (
    <button
      className={styles.paginationButton}
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
    >
      Prev
    </button>
  );
  const currentPage = (
    <button className={styles.paginationButton}>{current}</button>
  );
  const next = (
    <button
      className={styles.paginationButton}
      disabled={current == total}
      onClick={() => onChange(current + 1)}
    >
      Next
    </button>
  );
  return (
    <div>
      <div className={styles.pageBox}>
        {prev}
        {currentPage}
        {next}
      </div>
    </div>
  );
}

export default Page;
