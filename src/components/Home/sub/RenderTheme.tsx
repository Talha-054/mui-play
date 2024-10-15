import { objToArr } from "../../../utils/helperFunctions/helper";
import { jsonToPlainText, Options } from "json-to-plain-text";
import { useAppSelector } from "../../../hooks/useAppSelector";

function RenderTheme() {
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
  return (
    <>
      <span>createTheme{"({"}</span>
      <span style={{ paddingLeft: "20px" }}>components: {"{"}</span>
      <span style={{ paddingLeft: "40px" }}>
        {`Mui${componentData.component || "ComponentName"}`}: {"{"}
      </span>
      <span style={{ paddingLeft: "60px" }}>styleOverrides: {"{"}</span>
      <span style={{ paddingLeft: "80px" }}>root: {"{"}</span>
      {stylesArr?.map((property, index) => (
        <span key={index} style={{ paddingLeft: "100px" }}>
          {jsonToPlainText(property, options)}
          {index + 1 == stylesArr.length ? "" : ","}
        </span>
      ))}
      <span style={{ paddingLeft: "80px" }}>{"}"}</span>
      <span style={{ paddingLeft: "60px" }}>{"}"}</span>
      <span style={{ paddingLeft: "40px" }}>{"}"}</span>
      <span style={{ paddingLeft: "20px" }}>{"}"}</span>
      <span>{"})"}</span>
    </>
  );
}

export default RenderTheme;
