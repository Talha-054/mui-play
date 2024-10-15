import { objToArr } from "../../../utils/helperFunctions/helper";
import { jsonToPlainText, Options } from "json-to-plain-text";
import { useAppSelector } from "../../../hooks/useAppSelector";

function RenderSx() {
  const componentData = useAppSelector((state) => state.componentSlice);

  const options: Options = {
    color: true, // Whether to apply colors to the output or not
    spacing: true, // Whether to include spacing before colons or not
    seperator: ":", // seperate keys and values.
    squareBracketsForArray: false, // Whether to use square brackets for arrays or not
    doubleQuotesForKeys: false, // Whether to use double quotes for object keys or not
    doubleQuotesForValues: true, // Whether to use double quotes for string values or not
  };

  const stylesArr = objToArr(componentData.styles);

  console.log(stylesArr);

  return (
    <>
      <span>sx = {"{{"}</span>
      {stylesArr?.map((property, index) => (
        <span key={index} style={{ paddingLeft: "4px" }}>
          {jsonToPlainText(property, options)}
          {index + 1 == stylesArr.length ? "" : ","}
        </span>
      ))}
      <span>{"}}"}</span>
    </>
  );
}

export default RenderSx;
