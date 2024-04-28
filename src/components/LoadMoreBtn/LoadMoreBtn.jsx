import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.loadBrn} onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
