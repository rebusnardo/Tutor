import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover "
            src="https://tinyurl.com/397m7rsu"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://tinyurl.com/zsawcxjf"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://tinyurl.com/yzfxeasx"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://tinyurl.com/ckkzbjac"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://tinyurl.com/3xk9p9j8"
            alt="/"
          />
        </div>
        {/* <div>
          <img
            className="w-full h-full object-cover"
            src="https://tinyurl.com/3wpafvns"
            alt="/"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
