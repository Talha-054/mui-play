import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";
import { paletteMenu, paletteObj } from "../../../theme/palette";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { toggleDialog } from "../../../store/slices/dialogSlice";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useEffect, useRef, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RenderPalette from "../../Palette/RenderPalette";
import { resetPalette, updatePalette } from "../../../store/slices/themeSlice";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { model } from "../../../gemini/gemini";

interface colorVariant {
  dark: string;
  light: string;
}

function PaletteDialog() {
  const [outputStatus, setOutputStatus] = useState(false);

  const dialogData = useAppSelector((state) => state.dialogSlice);
  const inputRefs = useRef<
    Array<{ menu: string; submenu: string; el: HTMLDivElement; index: number; i: number }>
  >([]);

  const dispatch = useAppDispatch();

  let timeoutId: number;
  let indexCounter = 0;

  useEffect(() => {
    indexCounter = 0;
  }, []);

  function closeDialog() {
    dispatch(toggleDialog({ name: "paletteForm", visible: false }));
  }

  function handlePaletteChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    menu: string,
    i: number
  ) {
    if (timeoutId) clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      if (event.target.id == "main") {
        let lightDarkPrompt = `only output an object and nothing else containing light (color-200 as in tailwind) and dark (color-900 as in tailwind) variant of the given color. both values should be in same color code preferred hex and output should be in json fo. given color is ${event.target.value}`;
        console.log("fetching light and dark variants");

        (async () => {
          console.log("func fired ");

          const result = await model.generateContent(lightDarkPrompt);
          let colorVariant: colorVariant = JSON.parse(result.response.text());

          dispatch(
            updatePalette({
              property: menu,
              subProperty: event.target.id,
              value: event.target.value,
              light: colorVariant.light,
              dark: colorVariant.dark,
            })
          );

          // setting light and dark variants after user enters main color
          let output: any = inputRefs.current.filter(
            (item) => item.i == i && (item.index == 1 || item.index == 2)
          );

          if (
            output[0].el instanceof HTMLInputElement &&
            output[1].el instanceof HTMLInputElement
          ) {
            output[0].el.value = colorVariant.light;
            output[1].el.value = colorVariant.dark;
          }
          // event.target.removeAttribute("helperText");
        })();
      } else {
        dispatch(
          updatePalette({
            property: menu,
            subProperty: event.target.id,
            value: event.target.value,
          })
        );
      }
    }, 500);
  }

  function showPalette() {
    setOutputStatus(true);
  }

  function hidePalette() {
    setOutputStatus(false);
  }

  function clearPalette() {
    dispatch(resetPalette());
  }

  return (
    <>
      <Dialog open={dialogData.paletteForm}>
        <Box
          display={"flex"}
          zIndex={100}
          position={"sticky"}
          top={"0px"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "white" }}
        >
          <DialogTitle>palette</DialogTitle>
          <IconButton onClick={closeDialog}>
            <CancelIcon />
          </IconButton>
        </Box>

        <Divider />

        <List
          sx={{
            background:
              "radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)",
          }}
        >
          {paletteMenu.map((menu: string, i: number) => (
            <>
              <ListItem key={i}>
                <ListItemIcon>
                  <ExpandMoreIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{menu}</ListItemText>
              </ListItem>

              {paletteObj[menu].map((submenu: string, index: number) => (
                <>
                  <ListItem key={index} sx={{ paddingX: 20 }}>
                    <ListItemText>
                      {
                        <span style={{ marginRight: "5em" }}>
                          {submenu}
                          <strong>:</strong>
                        </span>
                      }{" "}
                      <InputBase
                        type={
                          ["mode", "action"].includes(menu)
                            ? [
                                "active",
                                "hover",
                                "selected",
                                "selectedOpacity",
                                "disabled",
                                "disabledBackground",
                                "focus",
                              ].includes(submenu)
                              ? "color"
                              : ""
                            : "color"
                        }
                        inputRef={(el) =>
                          (inputRefs.current[indexCounter++] = {
                            menu: menu,
                            submenu: submenu,
                            el: el,
                            i: i,
                            index: index,
                          })
                        }
                        id={submenu}
                        onChange={(event) => handlePaletteChange(event, menu, i)}
                        placeholder="Enter value..."
                        sx={{
                          borderRadius: "5px",
                          paddingX: "10px",
                          marginTop: "2.5px",
                          width: "150px",
                          height: "50px",
                          border: "1px solid #c4b68d",
                        }}
                      />
                      {/* <Skeleton ref={inputRefs.current[indexCounter-1]}  variant="rectangular" height={40} width={150} animation={"wave"} /> */}
                    </ListItemText>
                  </ListItem>
                </>
              ))}
            </>
          ))}
          <ListItem>
            <Box width={"100%"} display={"flex"} justifyContent={"end"}>
              <Button onClick={showPalette} variant="contained" startIcon={<ColorLensIcon />}>
                generate theme
              </Button>
            </Box>
          </ListItem>
        </List>
        {outputStatus && (
          <Stack
            sx={{
              background:
                "linear-gradient(to bottom, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 20%,rgb(215, 223, 252) 60%)",
            }}
            padding={5}
            display={"flex"}
            flexGrow={1}
          >
            <Box display={"flex"} width={"100%"} justifyContent={"end"}>
              <Tooltip title={"reset to default"}>
                <IconButton onClick={clearPalette}>
                  <RestartAltIcon color="error" fontSize="medium" />
                </IconButton>
              </Tooltip>

              <Tooltip title={"close"}>
                <IconButton onClick={hidePalette}>
                  <CancelIcon color="error" fontSize="medium" />
                </IconButton>
              </Tooltip>
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
              <RenderPalette />
              <IconButton
                onClick={() => console.log("saved")}
                sx={{ position: "absolute", right: 5, top: 5 }}
              >
                <ContentCopyIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
          </Stack>
        )}
      </Dialog>
    </>
  );
}

export default PaletteDialog;
