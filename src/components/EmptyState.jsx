const EmptyState = ({ searchStatus }) => {
  if (searchStatus === "idle") {
    return <p className="border-2">Start typing to search products</p>;
  }

  if (searchStatus === "empty") {
    return <p>Please enter a search term</p>;
  }

  if (searchStatus === "no-results") {
    return <p className="grid place-items-center h-15 mt-22 xl:text-2xl">No products found</p>;
  }

  return null;
};

export default EmptyState;
