import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import mockProducts from "../data/mockProducts";

export default function Home() {
  
  const destacados = mockProducts.slice(0, 4);  
  const ofertas = mockProducts.slice(4, 8).map((p) => ({
    ...p,
    oldPrice: p.price + 200,
    newPrice: p.price,
  }));  
  const masVendido = mockProducts.slice(8, 12);

  return (
    <div className="min-h-screen bg-dark text-text">
      <SearchBar />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <section>
          <h1 className="text-2xl font-bold mb-6">Productos Destacados</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destacados.map((product) => (
              <div
                key={product.id}
                className="card flex flex-col justify-between text-center"
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
                  <p className="text-primary font-bold mt-2">
                    ${product.price}
                  </p>
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
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-6">Ofertas Especiales</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ofertas.map((offer) => (
              <div
                key={offer.id}
                className="card flex flex-col justify-between text-center"
              >
                <Link to={`/products/${offer.id}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                  />
                </Link>
                <h2 className="text-lg font-semibold">{offer.title}</h2>
                <div className="mt-2">
                  <span className="text-muted line-through mr-2">
                    ${offer.oldPrice}
                  </span>
                  <span className="text-primary font-bold">
                    ${offer.newPrice}
                  </span>
                </div>
                <Link
                  to={`/products/${offer.id}`}
                  className="btn-primary w-full mt-4 text-center block"
                >
                  Ver Detalle
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-6">Lo Más Vendido</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masVendido.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col justify-between text-center"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                  />
                </Link>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-primary font-bold mt-2">${item.price}</p>
                <Link
                  to={`/products/${item.id}`}
                  className="btn-primary w-full mt-4 text-center block"
                >
                  Ver Detalle
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
