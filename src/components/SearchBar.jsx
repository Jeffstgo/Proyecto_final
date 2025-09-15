import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const categories = [
    "Electrónica",
    "Moda",
    "Hogar y Jardín",
    "Deportes",
    "Juguetes",
    "Automóviles",
  ];
  return (
    <div className="w-full bg-dark px-6 py-4">
      <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
        <div className="flex items-center bg-[#29382E] text-text rounded-full px-4 py-2 flex-1">
          <FaSearch className="text-text-muted mr-2" />
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="bg-transparent outline-none w-full text-text placeholder:text-text-muted"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-6 text-sm font-medium max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="pb-2 border-b-2 border-transparent hover:border-primary text-text hover:text-primary transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
