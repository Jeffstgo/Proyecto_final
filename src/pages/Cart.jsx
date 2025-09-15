import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearItem, clearCart, total } = useCart();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  {item.title} (x{item.qty})
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-yellow-500 px-2 py-1 rounded text-white"
                  >
                    -1
                  </button>
                  <button
                    onClick={() => clearItem(item.id)}
                    className="bg-red-500 px-2 py-1 rounded text-white"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
          <button
            onClick={clearCart}
            className="bg-gray-700 px-4 py-2 mt-4 rounded text-white"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
