import { useState } from "react";

export default function CreateAd() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo anuncio:", form);

    alert("Anuncio creado correctamente 🚀");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Crear un anuncio
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Título del producto
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej: iPhone 14 Pro Max"
              className="input w-full"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe tu producto..."
              className="input w-full h-28 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="price">
              Precio
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Ej: 499"
              className="input w-full"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Moda">Moda</option>
              <option value="Hogar y Jardín">Hogar y Jardín</option>
              <option value="Deportes">Deportes</option>
              <option value="Juguetes">Juguetes</option>
              <option value="Automóviles">Automóviles</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Imagen (URL)
            </label>
            <input
              id="image"
              name="image"
              type="url"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="input w-full"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full py-2 text-lg">
            Publicar anuncio
          </button>
        </form>
      </div>
    </div>
  );
}
