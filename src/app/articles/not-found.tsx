import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 rounded-lg shadow-md text-center bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">404</h2>
        <p className="text-gray-800">ページが見つかりません</p>
      </div>
    </div>
  );
};

export default Notfound;
