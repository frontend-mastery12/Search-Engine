import { useUserSearchLogic } from "../../hooks/UserSearchLogic";
import { Products } from "../../data/Products";
import SearchInput from "./SearchInput";
import Suggestion from "./Suggestion";
import ProductList from "../Product/ProductList";
import Loader from "../Loader";
import EmptyState from "../EmptyState";

export default function SearchContainer() {
  const {
    searchText,
    hasTyped,
    searchStatus,
    suggestions,
    results,
    isLoading,
    updateSearchText,
    executeSearch,
  } = useUserSearchLogic(Products);

  const handleSuggestionClick = (product) => {
    updateSearchText(product.name);
    executeSearch(product.name);
  };

  return (
    <div className="w-10/12 mx-auto mt-8">
      <SearchInput
        searchText={searchText}
        updateSearchText={updateSearchText}
        executeSearch={executeSearch}
      />

      {hasTyped && suggestions.length > 0 && (
        <Suggestion
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      )}

      {isLoading && <Loader />}

      {!isLoading && !hasTyped && <ProductList results={Products} />}

      {!isLoading && hasTyped && searchStatus === "success" && (
        <ProductList results={results} />
      )}

      {!isLoading &&
        hasTyped &&
        searchStatus !== "idle" &&
        searchStatus !== "success" && (
          <EmptyState searchStatus={searchStatus} />
        )}
    </div>
  );
}
