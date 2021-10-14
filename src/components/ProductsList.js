import { useEffect, useState } from "react";
import headBanner from "../images/headBanner.jpg";

const ProductsList = () => {
  const [productsArray, setProductsArray] = useState(null);

  useEffect(
    () =>
      setProductsArray([
        { id: 1, name: "kiripiti", price: "500 LKR" },
        { id: 2, name: "Ala", price: "250 LKR" },
        { id: 3, name: "seeni", price: "125 LKR" },
        { id: 4, name: "Mun ata", price: "100 LKR" },
      ]),

    []
  );

  return (
    <div className="bg-gray-200 grid grid-cols-3">
      {productsArray &&
        productsArray.map((element) => (
          <div class="card">
            <img
              src={headBanner}
              alt="stew"
              class="h-32 sm:h-48 w-full object-cover"
            />
            <div class="m-4">
              <span class="font-bold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <span>25 mins</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
