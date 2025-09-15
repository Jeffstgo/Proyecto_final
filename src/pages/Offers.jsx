import { Link } from "react-router-dom";
import mockProducts from "../data/mockProducts";

export default function Offers() {
  const offers = mockProducts.map((p) => ({
    ...p,
    oldPrice: p.price + 200,
    newPrice: p.price,
  }));

  return (
    <div className="min-h-screen bg-dark text-text px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Ofertas Especiales</h1>
      <p className="text-muted mb-8">
        Aprovecha los descuentos disponibles solo por tiempo limitado.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((product) => (
          <div
            key={product.id}
            className="card flex flex-col justify-between text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>

            <div className="mt-2">
              <span className="text-muted line-through mr-2">
                ${product.oldPrice}
              </span>
              <span className="text-primary font-bold">
                ${product.newPrice}
              </span>
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
    </div>
  );
}
