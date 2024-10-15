import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { paletteMenu, paletteObj } from "../../theme/palette";

function RenderPalette() {
  const palette = useAppSelector((state) => state.themeSlice.palette);
  useEffect(() => {
    console.log("palette rendered");
  }, [palette]);
  return (
    <>
      <span>palette : {"{"}</span>
      <span style={{ paddingLeft: "20px" }}>mode: {palette.mode}</span>
      {paletteMenu.map((paletteProperty: string, index: number) => (
        <>
          {paletteProperty != "mode" && (
            <>
              <span key={paletteProperty} style={{ paddingLeft: "20px" }}>
                {paletteProperty}: {"{"}
              </span>
              <span key={index}>
                {paletteObj[paletteProperty].map((subProperty: string, i: number) => (
                  <>
                    <span key={i} style={{ paddingLeft: "40px" }}>
                      {subProperty}
                      <strong>:</strong> &nbsp;{" "}
                      {typeof palette[paletteProperty][subProperty] == "string"
                        ? `"${palette[paletteProperty][subProperty]}"`
                        : palette[paletteProperty][subProperty]}
                      {i < paletteObj[paletteProperty].length - 1 ? "," : ""}
                    </span>
                    <br />
                  </>
                ))}
              </span>
              <span style={{ paddingLeft: "20px" }}>{"}"}</span>
            </>
          )}
        </>
      ))}

      <span>{"}"}</span>
    </>
  );
}

export default RenderPalette;
