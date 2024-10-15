import { Box, Paper, Stack, Typography } from "@mui/material";
import heroImg from "../../../assets/hero1.png";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { objToArr } from "../../../utils/helperFunctions/helper";
import { useEffect } from "react";
import { jsonToPlainText, Options } from "json-to-plain-text";

function Hero() {
  const componentData = useAppSelector((state) => state.componentSlice);

  const options: Options = {
    color: true, // Whether to apply colors to the output or not
    spacing: true, // Whether to include spacing before colons or not
    seperator: ":", // seperate keys and values.
    squareBracketsForArray: false, // Whether to use square brackets for arrays or not
    doubleQuotesForKeys: false, // Whether to use double quotes for object keys or not
    doubleQuotesForValues: false, // Whether to use double quotes for string values or not
  };

  const propsArr = objToArr(componentData.props);
  const stylesArr = objToArr(componentData.styles);

  useEffect(() => {});

  return (
    <>
      <Box
        sx={{
          height: "30vh",
          padding: "10px",
          display: "flex",
          marginY: "10px",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            backgroundImage: `url(${heroImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></Box>
        <Paper elevation={1} sx={{ flexGrow: 1, display: "flex", backgroundColor: "" }}>
          <Stack
            padding={1.5}
            overflow={"auto"}
            display={"flex"}
            alignItems={"center"}
            flexGrow={1}
            borderRight={"1px solid white"}
          >
            <Typography variant="h6" sx={{ borderBottom: "2px solid red" }} gutterBottom>
              props
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              flexDirection={"column"}
              flexGrow={1}
              overflow={"auto"}
              padding={1.5}
            >
              {propsArr.map((property, index) => (
                <>
                  <Typography key={index} variant="subtitle2">
                    {jsonToPlainText(property, options)}
                  </Typography>
                </>
              ))}
            </Box>
          </Stack>
          <Stack
            overflow={"auto"}
            padding={1.5}
            display={"flex"}
            alignItems={"center"}
            flexGrow={1}
          >
            <Typography variant="h6" sx={{ borderBottom: "2px solid red" }} gutterBottom>
              css
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              flexDirection={"column"}
              flexGrow={1}
              overflow={"auto"}
              padding={1.5}
            >
              {stylesArr.map((property, index) => (
                <>
                  <Typography key={index} variant="subtitle2">
                    {jsonToPlainText(property, options)}
                  </Typography>
                </>
              ))}
            </Box>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Hero;
