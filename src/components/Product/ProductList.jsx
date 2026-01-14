import ProductCard from "./ProductCard";

const ProductList = ({ results }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-15">
      {results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
