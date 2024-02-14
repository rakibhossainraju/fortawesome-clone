import IconCardComponent from "./IconCardComponent.jsx";
import { useSelector } from "react-redux";
import { selectDynamicGrids } from "../store/dynamic-layout/dynamic-layout.selctor.js";

export const IconsComponent = ({ fontAwesomeSvgs = [] }) => {
  const { roomy, compact, cheatsheet } = useSelector(selectDynamicGrids);

  return (
    <section
      className={`flex-center max-w-[80rem] flex-wrap ${compact && "gap-3.5"} ${
        cheatsheet && "gap-[1rem]"
      } max-sm:flex-col ${((!compact && !cheatsheet) || roomy) && "gap-6"}`}
    >
      {fontAwesomeSvgs.map((fontAwesomeSvg) => (
        <IconCardComponent
          key={fontAwesomeSvg.svgProperties.path}
          fontAwesomeSvg={fontAwesomeSvg}
        />
      ))}
    </section>
  );
};
