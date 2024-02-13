import { useDispatch } from "react-redux";
import {
  addToFilter,
  filterByLicenses,
} from "../store/app-data/app-data.action";

const licenses = {
  classic: "classic",
  brands: "brand",
  sharp: "pro",
  free: "free",
};

function SearchFieldsComponent() {
  const dispatch = useDispatch();
  const licenseFilteringHandler = (event) => {
    const key = event.currentTarget.innerText.toLowerCase();

    dispatch(
      addToFilter({ filterName: "licenses", filterValue: licenses[key] }),
    );
    dispatch(filterByLicenses());
  };
  return (
    <section className="flex gap-4 ">
      <div>
        <button onClick={licenseFilteringHandler}>Classic</button>
      </div>
      <div>
        <button onClick={licenseFilteringHandler}>Sharp</button>
      </div>
      <div>
        <button onClick={licenseFilteringHandler}>Brands</button>
      </div>
      <div>
        <button onClick={licenseFilteringHandler}>Free</button>
      </div>
    </section>
  );
}

export default SearchFieldsComponent;
