import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      id: "electronica",
      name: "Electrónica",
  image: "/images/categorias/Electronica.png",
    },
    {
      id: "moda",
      name: "Moda",
      image: "/images/categorias/Moda.png",
    },
    {
      id: "hogar",
      name: "Hogar y Jardín",
      image: "/images/categorias/Hogar.png",
    },
    {
      id: "deportes",
      name: "Deportes",
      image: "/images/categorias/Deportes.png",
    },
    {
      id: "juguetes",
      name: "Juguetes",
      image: "/images/categorias/Juguetes.png",
    },
    {
      id: "automoviles",
      name: "Automóviles",
      image: "/images/categorias/Automoviles.png",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-text px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Categorías</h1>
      <p className="text-muted mb-8">
        Explora productos organizados por categoría.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.id}`}
            className="bg-dark-2 border border-dark-4 rounded-xl cursor-pointer hover:shadow-2xl transition flex flex-col items-center p-8 min-h-[340px]"
            style={{ minWidth: '320px' }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-56 object-cover rounded-xl mb-6"
              onError={e => { e.target.src = '/images/categorias/default.png'; }}
            />
            <h2 className="text-2xl font-bold mt-auto mb-2 text-center">{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
