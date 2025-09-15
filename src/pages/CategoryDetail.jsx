import { useParams, Link } from "react-router-dom";
import mockProducts from "../data/mockProducts";

export default function CategoryDetail() {
  const { id } = useParams();

  const products = mockProducts;

  const filtered = products.filter((p) => p.category === id);

  return (
  <div className="min-h-screen bg-dark text-text max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 capitalize">{id}</h1>

      {filtered.length === 0 ? (
        <p className="text-muted">
          No hay productos en esta categoría todavía.
        </p>
      ) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="card flex flex-col justify-between text-center p-6 rounded-lg bg-dark border border-border shadow"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                />
              </Link>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-primary font-bold mt-2">${product.price}</p>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="btn-primary w-full mt-4 text-center block"
              >
                Ver Detalle
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
