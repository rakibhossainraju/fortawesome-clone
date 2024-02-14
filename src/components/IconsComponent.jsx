import IconCardComponent from "./IconCardComponent.jsx";

export const IconsComponent = ({ fontAwesomeSvgs }) => {
  const compact = false;
  const cheatsheet = false;
  const roomy = false;
  return (
    <section
      className={`flex-center max-w-[80rem] flex-wrap ${compact && "gap-3.5"} ${
        cheatsheet && "gap-[1rem]"
      } max-sm:flex-col ${((!compact && !cheatsheet) || roomy) && "gap-6"}`}
    >
      {fontAwesomeSvgs.map((fontAwesomeSvg) => (
        <IconCardComponent fontAwesomeSvg={fontAwesomeSvg} />
      ))}
    </section>
  );
};
