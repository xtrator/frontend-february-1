export default function PageButtons({ page, setPage }) {
  function onClick() {
    setPage(page == 1 ? 2 : 1);
  }
  return (
    <>
      <button onClick={onClick}>Change to page {page}</button>
    </>
  );
}
