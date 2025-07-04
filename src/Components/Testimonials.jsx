import React from "react";
import "../App.css";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl fuente-principal  font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-xl border-b-4 border-l-4 border-orange-300 px-6 py-8">
            <p className="text-gray-600 relative pl-6 before:content-['“'] before:text-4xl before:absolute before:-top-2 before:left-0 before:text-orange-500">
              Mi perro Luna adora la comida premium que compro aquí. La
              calidad es excelente y siempre llega a tiempo.
            </p>
            <p className="font-semibold mt-4">María García</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl border-b-4 border-l-4 border-orange-300  px-6 py-8">
            <p className="text-gray-600 relative pl-6 before:content-['“'] before:text-4xl before:absolute before:-top-2 before:left-0 before:text-orange-500">
              Excelente variedad de juguetes para mi gato. Los precios son muy
              competitivos y siempre encuentro novedades.
            </p>
            <p className="font-semibold mt-4">Carlos Rodríguez</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl border-b-4 border-l-4 border-orange-300  px-6 py-8">
            <p className="text-gray-600  relative pl-6 before:content-['“'] before:text-4xl before:absolute before:-top-2 before:left-0 before:text-orange-500">
              Me encanta la calidad de los productos y la atención al cliente.
              Recomiendo totalmente esta tienda.
            </p>
            <p className="font-semibold mt-4">Laura Martínez</p>
              <p>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
