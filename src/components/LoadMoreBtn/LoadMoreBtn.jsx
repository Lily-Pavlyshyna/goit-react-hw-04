import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick, isLoading }) {
  return (
    <button className={css.button} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
}
