import { Link } from "react-router-dom";

export default function Products() {
  const mockProducts = [
    { id: 1, title: "Smartphone Galaxy S23 Ultra", price: 1199.99 },
    { id: 2, title: "Laptop Dell XPS 15", price: 1899.0 },
    { id: 3, title: "Auriculares Sony WH-1000XM5", price: 399.99 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-2">Precio: ${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
