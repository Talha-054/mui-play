import Component from "./Component";
import { booleanProps, props } from "../../../utils/props/props";
import { allCssStyles } from "../../../utils/css/styles";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateProps, updateStyles } from "../../../store/slices/componentSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CssIcon from "@mui/icons-material/Css";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CancelIcon from "@mui/icons-material/Cancel";
import copy from "copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Autocomplete,
  Backdrop,
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
  Radio,
  RadioGroup,
  SpeedDial,
  SpeedDialAction,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { jsonToPlainText, Options } from "json-to-plain-text";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RenderSx from "./RenderSx";
import RenderTheme from "./RenderTheme";
import { toggleDialog } from "../../../store/slices/dialogSlice";

function Playground() {
  const [currProperty, setCurrentProperty] = useState("");
  const [backdropStatus, setBackdropStatus] = useState(false);
  const [styles, setStyles] = useState(false);
  const [radio, setRadio] = useState(false);
  // const [paletteStatus, setPaletteStatus] = useState(false);
  const [outputStatus, setOutputStatus] = useState("");
  const propertyValueRef = useRef<HTMLInputElement>();
  const componentData = useAppSelector((state) => state.componentSlice);
  const dialogData = useAppSelector((state) => state.dialogSlice);
  const dispatch = useAppDispatch();

  let timeoutId: number;

  const speedDialActions = [
    { icon: <CssIcon />, name: "get sx object", callback: handleSxChoice },
    { icon: <ColorLensIcon />, name: "get theme obj", callback: handleThemeChoice },
  ];

  const options: Options = {
    color: true, // Whether to apply colors to the output or not
    spacing: true, // Whether to include spacing before colons or not
    seperator: ":", // seperate keys and values.
    squareBracketsForArray: false, // Whether to use square brackets for arrays or not
    doubleQuotesForKeys: false, // Whether to use double quotes for object keys or not
    doubleQuotesForValues: true, // Whether to use double quotes for string values or not
  };

  useEffect(() => {
    setCurrentProperty("");
  }, [componentData.component]);

  function handleChoice(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value == "palette") {
      dispatch(toggleDialog({ name: "paletteForm", visible: true }));
    } else {
      e.target.value == "css" ? setStyles(true) : setStyles(false);
    }
  }

  function handleField(_e: React.SyntheticEvent, newVal: string | null) {
    if (!newVal || newVal == "") return;

    setCurrentProperty(newVal);
    if (booleanProps.includes(newVal)) {
      setRadio(true);
    } else {
      setRadio(false);
    }
    if (propertyValueRef.current) {
      console.log(propertyValueRef.current.value);
      propertyValueRef.current.value = "";
    }
  }

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (currProperty == "") return;

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log("reached");

      if (styles) {
        dispatch(updateStyles({ styles: { [currProperty]: e.target.value } }));
      } else {
        dispatch(updateProps({ props: { [currProperty]: e.target.value } }));
      }
    }, 500);
  }

  function hideOutputArea() {
    setOutputStatus("");
    setBackdropStatus(false);
  }

  function copyCode() {
    if (outputStatus == "sx") {
      copy(`sx={{
        ${jsonToPlainText(componentData?.styles, options)}
        }}`);
    } else {
      copy(`theme = createTheme({
                      components: {
                        MuiButton: {
                          styleOverrides: {
                            root: {
                              ${jsonToPlainText(componentData?.styles, options)}
                            }
                          }
                        }
                      }
      })`);
    }

    toast.info("copied to clipboard");
  }

  function handleSxChoice() {
    setOutputStatus("sx");
  }

  function handleThemeChoice() {
    setOutputStatus("theme");
  }

  return (
    <>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          background:
            "radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)",
          flexGrow: 1,
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ mr: 10 }}>
          <RadioGroup
            sx={{
              padding: 2,
              borderRadius: 2.5,

              paddingX: 3,
            }}
            onChange={handleChoice}
          >
            <FormControlLabel value={"props"} label={"props"} control={<Radio />} />
            <Divider />
            <FormControlLabel value={"css"} label={"css"} control={<Radio />} />
            <Divider />
            <FormControlLabel
              checked={dialogData.paletteForm}
              value={"palette"}
              label={"palette"}
              control={<Radio />}
            />
            <Divider />
            <FormControlLabel value={""} label={"test"} control={<Radio />} />
            <FormControlLabel value={""} label={"test"} control={<Radio />} />
            <FormControlLabel value={""} label={"test"} control={<Radio />} />
            <FormControlLabel value={""} label={"test"} control={<Radio />} />
            <FormControlLabel value={""} label={"test"} control={<Radio />} />
          </RadioGroup>
        </Stack>
        <Stack flexGrow={1}></Stack>
        <Stack flexGrow={1}></Stack>
        <Stack flexGrow={1}></Stack>
        {/* output area sx/theme object */}
        {outputStatus && (
          <Stack flexGrow={1}>
            <Box display={"flex"} justifyContent={"space-between"} paddingX={0.5}>
              <Typography
                variant="h6"
                fontWeight={900}
                textAlign={"center"}
                sx={{ borderBottom: "2px solid red" }}
                gutterBottom
              >
                {outputStatus == "sx" ? "sx" : "theme"}
              </Typography>
              <IconButton onClick={hideOutputArea}>
                <CancelIcon />
              </IconButton>
            </Box>
            {/* output div */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              overflow={"auto"}
              padding={3}
              borderRadius={2.5}
              position={"relative"}
              sx={{ backgroundColor: "#000000", color: "white" }}
            >
              {outputStatus == "sx" ? <RenderSx /> : <RenderTheme />}
              <IconButton onClick={copyCode} sx={{ position: "absolute", right: 5, top: 5 }}>
                <ContentCopyIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
          </Stack>
        )}
        {/* select props/css and their values */}
        {!outputStatus && (
          <Stack flexGrow={1} sx={{ position: "relative" }}>
            <Box
              flexDirection={window.innerWidth < 800 ? "column" : "row"}
              display={"flex"}
              justifyContent={"center"}
              gap={5}
            >
              <Autocomplete
                value={currProperty}
                sx={{
                  width: "250px",
                }}
                options={(styles ? allCssStyles : props[componentData.component]) || []}
                size="small"
                renderInput={(params) => (
                  <TextField
                    label={styles ? "css" : "props"}
                    placeholder={styles ? "search css " : "search props..."}
                    {...params}
                  />
                )}
                onChange={handleField}
              />
              <ArrowRightAltIcon
                sx={{
                  height: "40px",
                }}
              />
              {radio ? (
                <RadioGroup
                  ref={propertyValueRef}
                  sx={{
                    paddingX: 2,
                    borderRadius: 2.5,
                    display: "flex",
                    flexDirection: "row",
                  }}
                  onChange={handleValueChange}
                >
                  <FormControlLabel
                    sx={{ mr: 8 }}
                    value={"true"}
                    label={"true"}
                    control={<Radio />}
                  />
                  <FormControlLabel value={"false"} label={"false"} control={<Radio />} />
                </RadioGroup>
              ) : (
                <InputBase
                  inputRef={propertyValueRef}
                  placeholder="Enter value..."
                  sx={{
                    width: "250px",
                    height: "40px",
                    border: "1px solid #E3E1D9",
                    borderRadius: "5px",
                    paddingX: "10px",
                  }}
                  onChange={handleValueChange}
                ></InputBase>
              )}
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexGrow={1}>
              <Component />
            </Box>
            <SpeedDial
              onOpen={() => setBackdropStatus(true)}
              onClose={() => setBackdropStatus(false)}
              sx={{ position: "absolute", bottom: "5px", right: "5px" }}
              ariaLabel="user choice"
              icon={<ExpandLessIcon fontSize="medium" />}
            >
              {speedDialActions.map((action) => (
                <SpeedDialAction
                  id={action.name}
                  onClick={() => action.callback()}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
            <Backdrop open={backdropStatus} />
          </Stack>
        )}
      </Paper>
      <ToastContainer autoClose={1000} position="top-center" hideProgressBar={true} />
    </>
  );
}

export default Playground;
