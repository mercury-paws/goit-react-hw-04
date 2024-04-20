import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <>
      <button onClick={loadMore} type="button">
        Load More
      </button>
    </>
  );
}
