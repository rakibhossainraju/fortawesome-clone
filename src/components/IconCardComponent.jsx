import { useSelector } from "react-redux";
import { selectDynamicGrids } from "../store/dynamic-layout/dynamic-layout.selctor.js";

const IconCardComponent = ({
  fontAwesomeSvg: { svgProperties, svgName, pro },
}) => {
  const { roomy, compact, cheatsheet } = useSelector(selectDynamicGrids);

  return (
    <div
      className={`group relative flex h-[10rem] w-[11.5rem] items-center gap-3.5  rounded-lg bg-white p-3 text-center transition-[background,shadow] duration-300 hover:bg-yellow-400 hover:shadow-xl ${roomy && "flex-center flex-col gap-10"}  ${compact && "flex-center h-[8.5rem] w-[8rem] flex-col"} ${cheatsheet && "h-[3rem] w-[12rem] flex-row justify-start pl-2 before:right-5 before:scale-[0.8]"} ${pro && "before:absolute before:-top-3 before:rounded-lg before:bg-yellow-400 before:px-3 before:py-0.5 before:text-[0.8rem] before:font-semibold before:text-slate-900 before:content-['PRO']"} ${((!compact && !cheatsheet) || roomy) && "flex-center flex-col"}`}
    >
      <svg
        className={`aspect-square w-[2.5rem] fill-blue-1000 ${cheatsheet && "w-[1.23rem]"} ${compact && "w-[2rem]"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={svgProperties.viewBox}
      >
        <path d={svgProperties.path} />
      </svg>
      <p
        className={`font-ceraroundpros text-[0.9rem] text-slate-500 group-hover:text-slate-600 ${cheatsheet && "text-left text-xs"} ${compact && "text-[0.8rem]"}`}
      >
        {svgName.replaceAll("-", " ")}
      </p>
    </div>
  );
};

export default IconCardComponent;
