// ui component for the search bar

'use client';
import {SearchIcon} from "lucide-react" ; 

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    // console.log(term);
  }
 
  return (
    <div className="relative ">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-fit placeholder:color-[#27272A] py-[9px] pl-10 text-sm  o placeholder:text-gray-500  outline-none   "
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-stone-50" />
    </div>
  );
}