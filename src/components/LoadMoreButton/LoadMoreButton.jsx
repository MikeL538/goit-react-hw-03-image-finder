import css from './LoadMoreButton.module.scss';

export default function LoadMoreButton({ onLoadMore }) {
  function handleLoadMore() {
    console.log('Load more button clicked');
    onLoadMore();
  }

  return (
    <button onClick={handleLoadMore} className={css.LoadMoreBtn}>
      Load More Images
    </button>
  );
}
