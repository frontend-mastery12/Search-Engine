import { useState } from "react";
import { searchRule } from "../utils/SearchHelpers";

export function useUserSearchLogic(products) {
  const [searchText, setSearchText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const [searchStatus, setSearchStatus] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  const updateSearchText = (value) => {
    setSearchText(value);

    if (value.trim() === "") {
      setHasTyped(false);
      setSuggestions([]);
      setResults([]);
      setSearchStatus("idle");
      return;
    }

    setHasTyped(true);
    setSearchStatus("idle");
    setResults([]);

    const matched = searchRule(products, value);
    setSuggestions(matched);
  };

  const executeSearch = (value) => {
    const textToSearch = value ?? searchText;

    if (textToSearch.trim() === "") {
      setResults([]);
      setSearchStatus("empty");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const foundResults = searchRule(products, textToSearch);
      setResults(foundResults);

      if (foundResults.length === 0) {
        setSearchStatus("no-results");
      } else {
        setSearchStatus("success");
      }

      setSuggestions([]);
      setIsLoading(false);
    }, 3000);
  };

  return {
    searchText,
    hasTyped,
    searchStatus,
    suggestions,
    results,
    isLoading,
    updateSearchText,
    executeSearch,
  };
}
