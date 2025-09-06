import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="border border-[var(--border-primary)] rounded-lg p-2 w-73 h-10 mt-4">
      <div className="flex items-center gap-2 w-full">
        <Image src="/svg/search-icon.svg" alt="Search" width={24} height={24} />
        <input
          type="text"
          placeholder="Enter Text"
          className="focus:outline-none focus:ring-0 focus:border-transparent w-full"
        />
      </div>
      <h4 className="text-[#4C4C4C] bg-none text-sm mt-4">
        You can search up to 5 provider to view their availability specifically.
      </h4>
    </div>
  );
};

export default SearchInput;
