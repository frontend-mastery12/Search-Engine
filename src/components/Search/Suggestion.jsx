export default function Suggestion({ suggestions, onSuggestionClick }) {
  return (
    <ul className="mt-5 xl:w-195 xl:mx-auto">
      {suggestions.map((product) => (
        <li
          key={product.id}
          className="flex items-center justify-between hover:bg-white cursor-pointer p-2"
          onClick={() => onSuggestionClick(product)}
        >
          <span>{product.name}</span>
          <i className="bxr bx-x"></i>
        </li>
      ))}
    </ul>
  );
}
