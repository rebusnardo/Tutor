import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col  p-4">
          <h1 className="font-bold text-4xl">Improve your Scores</h1>
          <h2 className="text-4xl py-4 italic">Pass your Exams</h2>
          <h2 className="text-4xl py-4 italic">Pay wit Govment CHEESE!!!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
