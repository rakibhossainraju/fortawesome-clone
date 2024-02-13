import { useSelector, useDispatch } from "react-redux";
import {
  selectAppDataObj,
  selectFontAwesomeCategories,
  selectFontAwesomeSponsors,
} from "../store/app-data/app-data.selctor";
import {
  addToFilter,
  filterByCategories,
  filterByFeatures,
  filterByStyles,
} from "../store/app-data/app-data.action";

const SideBarComponent = () => {
  const dispatch = useDispatch();
  const categories = Object.values(useSelector(selectFontAwesomeCategories));
  const sponsors = Object.keys(useSelector(selectFontAwesomeSponsors));

  const { favorite, newVersos, solidStyles, regularStyes, duotoneStyles } =
    useSelector(selectAppDataObj).svgs.reduce(
      (acc, carSvg) => {
        if (carSvg.favorite) acc.favorite = acc.favorite + 1;
        if (carSvg.changes.some((version) => version.startsWith("6")))
          acc.newVersos = acc.newVersos + 1;
        if (carSvg.familyStyle === "solid")
          acc.solidStyles = acc.solidStyles + 1;
        if (carSvg.familyStyle === "regular")
          acc.regularStyes = acc.regularStyes + 1;
        if (carSvg.familyStyle === "brands")
          acc.duotoneStyles = acc.duotoneStyles + 1;
        return acc;
      },
      {
        favorite: 0,
        newVersos: 0,
        regularStyes: 0,
        solidStyles: 0,
        duotoneStyles: 0,
      },
    );
  const handelCategoriesFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "categories",
        filterValue: filter,
      }),
    );
    dispatch(filterByCategories());
  };

  const handelFeaturedFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "features",
        filterValue: filter,
      }),
    );
    dispatch(filterByFeatures());
  };
  const handleStylesFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "styles",
        filterValue: filter,
      }),
    );
    dispatch(filterByStyles());
  };

  return (
    <section>
      <div className="flex flex-col">
        <button onClick={() => handleStylesFilter("solid")}>
          Solid {solidStyles}
        </button>
        <button onClick={() => handleStylesFilter("regular")}>
          Regular {regularStyes}
        </button>
        <button>Light</button>
        <button>Thin</button>
        <button onClick={() => handleStylesFilter("brands")}>
          Duotone {duotoneStyles}
        </button>
      </div>
      <div>
        <button onClick={() => handelFeaturedFilter("new")}>
          New In V6 {newVersos}
        </button>
        <button onClick={() => handelFeaturedFilter("sponsors")}>
          Sponsored {sponsors.length}
        </button>
        <button onClick={() => handelFeaturedFilter("favorite")}>
          Staff Favorites {favorite}
        </button>
      </div>
      <div>
        {categories.slice(0, 10).map((category) => (
          <div
            key={category.label}
            onClick={() => handelCategoriesFilter(category.category)}
            className="flex gap-5"
          >
            <h2 className="text-2xl text-fuchsia-600">{category.label}</h2>
            <h2 className="text-2xl text-fuchsia-600">
              {category.icons.length}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideBarComponent;
