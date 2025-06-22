import React from "react";

const Categories = () => {
  const categories = [
    { title: "🌐 General Services" },
    { title: "📱 Digital & Daily Life" },
    { title: "🏠 Home & Lifestyle" },
    { title: "🛠️ Utility Tools" },
  ];

  return (
    <div id="categories" className="py-10 px-4 max-w-6xl mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-8">OUR SERVICES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold">{category.title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          See more...
        </button>
      </div>
    </div>
  );
};

export default Categories;
