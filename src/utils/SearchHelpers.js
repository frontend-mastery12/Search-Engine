export function searchRule(products, searchText) {
  if (!Array.isArray(products)) return [];
  if (typeof searchText !== "string") return [];

  const normalizedText = searchText.trim().toLowerCase();

  if (normalizedText === "") return [];

  return products.filter((product) => {
    if (!product || typeof product.name !== "string") return false;

    return product.name.toLowerCase().includes(normalizedText);
  });
}
