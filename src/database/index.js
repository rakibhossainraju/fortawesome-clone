// import { log } from "console";
import { log } from "console";
import fs from "fs";

//************** First Part **************** */

// import yaml from "js-yaml";

// // Process and convert YML file to a normal js obj
// const categoriesYAMLData = fs.readFileSync("./categories.yml");
// const categoriesJSData = yaml.load(categoriesYAMLData);
// const categoriesSTRData = JSON.stringify(categoriesJSData, null, 2);

// fs.writeFileSync("categories.json", categoriesSTRData);

// const sponsorsYAMLData = fs.readFileSync("./sponsors.yml");
// const sponsorsJSData = yaml.load(sponsorsYAMLData);
// const sponsorsSTRData = JSON.stringify(sponsorsJSData, null, 2);

// fs.writeFileSync("sponsors.json", sponsorsSTRData);

//************** Second Part **************** */

import FA_DATA from "./font-awesome.json" assert { type: "json" };
import CATAGORIES from "./categories.json" assert { type: "json" };
import SPONSORS from "./sponsors.json" assert { type: "json" };
import __ from "lodash";
const FA_KEYS = Object.keys(FA_DATA);

//Creating SVG Related filed and svg
let svgs = FA_KEYS.reduce((acc, carVal, index) => {
  //Extract the classic filed form the
  const svgClassic = FA_DATA[carVal].svgs.classic;
  const {
    voted: favorite,
    changes,
    search,
    familyStylesByLicense,
  } = FA_DATA[carVal];

  //Expecting Values form the svg
  const { viewBox, path, lastModified } =
    svgClassic[Object.keys(svgClassic)[0]];
  //Setting the accelerator with the svg properties.
  const obj = {
    svgName: carVal,
    favorite,
    changes,
    lastModified,
    classic: false,
    brand: false,
    pro: false,
    free: false,
    familyStyle: familyStylesByLicense.free[0].style,
    searchTerms: search.terms,
    svgProperties: { viewBox, path },
  };
  if (index > 500 && index < 1000) obj.brand = true;
  if (index > 1200 && index < 1800) obj.pro = true;
  if (index > 300 && index < 1500) obj.classic = true;
  acc.push(obj);
  return acc;
}, []);

svgs = svgs.map((svg) => {
  if (!svg.pro) {
    const newSvg = { ...svg, free: true };
    return newSvg;
  }
  return svg;
});

const categories = Object.keys(CATAGORIES).reduce((acc, categoryKey) => {
  acc[categoryKey] = {
    category: categoryKey,
    ...CATAGORIES[categoryKey],
  };
  return acc;
}, {});

const sponsors = {};
Object.keys(SPONSORS).reduce((acc, carVal) => {
  SPONSORS[carVal].icons.forEach((icon) => {
    sponsors[icon] = {
      label: SPONSORS[carVal].label,
      url: SPONSORS[carVal].url,
    };
  });
}, {});

const finalOutput = {
  svgs: __.shuffle(svgs),
  categories: categories,
  sponsors: sponsors,
};

// fs.writeFileSync("index-db.json", JSON.stringify(finalOutput, null, 2));
log("Successful");
