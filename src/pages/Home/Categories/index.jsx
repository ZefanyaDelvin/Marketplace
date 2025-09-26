import { Icon } from "@iconify/react";
import { useState } from "react";

const Categories = () => {
  const [active, setActive] = useState(0);

  const categories = [
    {
      id: 1,
      name: "Sayur-sayuran",
      icon: <Icon icon="tabler:carrot" width="24" height="24" />,
    },
    {
      id: 2,
      name: "Minuman dan Susu",
      icon: <Icon icon="lucide:milk" width="24" height="24" />,
    },
    {
      id: 3,
      name: "Minyak dan bumbu",
      icon: <Icon icon="ph:cooking-pot" width="24" height="24" />,
    },
    {
      id: 4,
      name: "Buah-buahan",
      icon: <Icon icon="healthicons:fruits-outline" width="24" height="24" />,
    },
    {
      id: 5,
      name: "Protein hewani",
      icon: <Icon icon="ph:cow" width="24" height="24" />,
    },
    {
      id: 6,
      name: "Beras dan Bijiian",
      icon: <Icon icon="lsicon:rice-outline" width="24" height="24" />,
    },
  ];

  return (
    <>
      <div className="items-center gap-3 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-6 bg-red-500 rounded"></span>
          <span className="text-red-500 font-semibold">Categories</span>
        </div>
        <h2 className="text-4xl font-bold text-black">Browse By Category</h2>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer border transition
              ${
                active === cat.id
                  ? "bg-red-500 text-white"
                  : "bg-white hover:bg-gray-100 text-black border-gray-300"
              }`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="text-sm font-medium text-center">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
