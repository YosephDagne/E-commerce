import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault;
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 15% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email "
          required
        />
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 py-2 text-md font-semibold rounded-full ring-2 ring-offset-gray-700 shadow-md border-2 border-black hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
