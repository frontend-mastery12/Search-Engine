export default function ProductCard({ product }) {
  return (
    <div className="w-92 rounded-xl bg-white py-4 shadow-md">
      <div className="flex h-56 items-center justify-center">
        <img
          className="w-40 object-contain"
          src={product.img}
          alt={product.name}
        />
      </div>

      <div className="mt-6 space-y-2 px-4">
        <h2 className="text-xl font-bold">{product.name}</h2>

        <div className="flex justify-between text-sm">
          <span>Size</span>
          <span>{product.size}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Color</span>
          <span>{product.color}</span>
        </div>

        <div className="flex justify-between text-sm font-medium">
          <span>Price</span>
          <span>${product.price}</span>
        </div>
        <button className="mt-5 w-full cursor-pointer rounded-se-2xl bg-black p-3 text-white transition-colors duration-200 hover:bg-amber-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
