import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-dark border-b border-border text-text px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold text-white">
          Jeffmart
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition">
            Inicio
          </Link>
          <Link to="/categories" className="hover:text-primary transition">
            Categorías
          </Link>
          <Link to="/offers" className="hover:text-primary transition">
            Ofertas
          </Link>
          <Link to="/ads/create" className="hover:text-primary transition">
            Vender
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Link
          to="/favorites"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#29382E] text-text hover:bg-primary/30 transition"
        >
          <FaHeart />
        </Link>
        <Link
          to="/cart"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#29382E] text-text hover:bg-primary/30 transition"
        >
          <FaShoppingCart />
          {cart && cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full px-2 text-xs font-bold">
              {cart.reduce((acc, item) => acc + item.qty, 0)}
            </span>
          )}
        </Link>
        {user ? (
          <Link to="/profile">
            <img
              src={user.avatar || "https://i.pravatar.cc/40"}
              alt="avatar"
              className="w-9 h-9 rounded-full border border-border"
            />
          </Link>
        ) : (
          <div className="flex space-x-2">
            <Link to="/login" className="btn-primary text-sm px-3 py-1 rounded">
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="btn-primary text-sm px-3 py-1 rounded"
            >
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
