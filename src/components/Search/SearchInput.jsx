import "../../style.css";

export default function SearchInput({
  searchText,
  updateSearchText,
  executeSearch,
}) {
  const handleChange = (event) => {
    updateSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    executeSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[0.6rem] bg-white flex justify-between items-center g-5 xl:w-197 xl:mx-auto"
    >
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-10/12 h-13 rounded-3xl px-3 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-black text-white h-12 w-25 rounded-[0.6rem] tracking-widest cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
