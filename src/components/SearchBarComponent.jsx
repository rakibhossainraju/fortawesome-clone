import { useDispatch } from "react-redux";
import { searchByName } from "../store/app-data/app-data.action";
import { debounce } from "../utils/debounce.utils";
import { useState } from "react";

function SearchBarComponent() {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const handelSearch = debounce((query) => dispatch(searchByName(query)), 500);
  // console.log(isLoading);
  return (
    <div>
      <input
        onChange={(event) => handelSearch(event.currentTarget.value)}
        className="w-full max-w-2xl border border-blue-500 p-10"
      />
    </div>
  );
}

export default SearchBarComponent;
