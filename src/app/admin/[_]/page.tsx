import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex-grow w-full flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="p-6 text-3xl text-center">
        Oops! That page can’t be found.
      </p>
      <Link
        href="/"
        className="border mt-8 border-gray-600 px-4 py-3 rounded flex gap-2 hover:gap-4 transition-all"
      >
        <span>Return Home</span>
        <span>{"->"}</span>
      </Link>
    </div>
  );
}

export default NotFound;
