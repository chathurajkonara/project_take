import { useEffect, useState } from "react";
import headBanner from "../images/headBanner.jpg";

const EntityHeader = () => {
  const [entityName, setEntityName] = useState("");

  useEffect(() => setEntityName("Entity Name (optional)"), []);

  return (
    <div className="bg-gray-200">
      <img
        src={headBanner}
        alt="Head Banner"
        className="w-full h-36 sm:h-56 object-cover rounded-md my-2 sm:my-4"
      />
      <div className="flex justify-center my-2 sm:my-4">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-600">
          {entityName}
        </h1>
      </div>
    </div>
  );
};

export default EntityHeader;
