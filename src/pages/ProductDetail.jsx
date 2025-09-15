import { useParams } from "react-router-dom";
import mockProducts from "../data/mockProducts";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark text-text flex items-center justify-center">
        <p className="text-muted">Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-text px-6 py-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-muted">{product.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Especificaciones</h2>
            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-2 font-medium">Marca</td>
                  <td className="p-2">{product.brand || "Genérica"}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2 font-medium">Modelo</td>
                  <td className="p-2">{product.model || "N/A"}</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2 font-medium">Color</td>
                  <td className="p-2">{product.color || "N/A"}</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Garantía</td>
                  <td className="p-2">{product.warranty || "Sin garantía"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary mb-4">
              ${product.price}
            </p>
            <button
              className="btn-primary w-full py-3 text-lg"
              onClick={() => {
                addToCart(product);
                setShowMsg(true);
                setTimeout(() => setShowMsg(false), 1500);
              }}
            >
              Añadir al Carrito
            </button>
            {showMsg && (
              <div className="mt-4 text-green-500 text-center animate-fadeIn">
                Producto agregado al carrito!
              </div>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Información del Vendedor
            </h2>
            <p className="text-sm">
              <span className="font-medium">{product.seller}</span> ·{" "}
              {product.sales}
            </p>
            <p className="text-sm text-muted mt-2">{product.shipping}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
