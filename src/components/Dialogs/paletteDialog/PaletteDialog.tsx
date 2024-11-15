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
  Typography,
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
import { resetPalette, updatePalette, addCustomField } from "../../../store/slices/themeSlice";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { modelJson } from "../../../gemini/gemini";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

interface colorVariant {
  dark: string;
  light: string;
}

function PaletteDialog() {
  const [outputStatus, setOutputStatus] = useState(false);

  const dialogData = useAppSelector((state) => state.dialogSlice);
  const palette = useAppSelector((state) => state.themeSlice.palette);
  const [addNewFieldStatus, setAddNewFieldStatus] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const inputRefs = useRef<
    Array<{ menu: string; submenu: string; el: HTMLDivElement; index: number; i: number }>
  >([]);

  const dispatch = useAppDispatch();

  let paletteTimeoutId: number;
  let newFieldTimeoutId: number;

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
    if (paletteTimeoutId) clearTimeout(paletteTimeoutId);
    paletteTimeoutId = setTimeout(() => {
      if (event.target.id == "main") {
        let lightDarkPrompt = `only output an object and nothing else containing light (color-200 as in tailwind) and dark (color-900 as in tailwind) variant of the given color. both values should be in same color code preferred hex and output should be in json fo. given color is ${event.target.value}`;

        (async () => {
          console.log("func fired ");

          const result = await modelJson.generateContent(lightDarkPrompt);
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
          console.log({
            property: menu,
            subProperty: event.target.id,
            value: event.target.value,
            light: colorVariant.light,
            dark: colorVariant.dark,
          });
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

  function handleNewField(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("function fired");

    if (newFieldTimeoutId) clearTimeout(newFieldTimeoutId);
    newFieldTimeoutId = setTimeout(() => {
      paletteMenu.unshift(event.target.value);
      paletteObj[event.target.value] = paletteObj.primary;
      dispatch(addCustomField({ name: event.target.value }));
      setAddNewFieldStatus(false);
    }, 1500);
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
      <Dialog fullScreen open={dialogData.paletteForm}>
        <Box
          display={"flex"}
          zIndex={100}
          position={"sticky"}
          top={"0px"}
          justifyContent={"space-between"}
          bgcolor={theme.palette.background.default}
        >
          <DialogTitle>{t("palette")}</DialogTitle>
          <IconButton onClick={closeDialog}>
            <CancelIcon />
          </IconButton>
        </Box>

        <Divider />

        <Box sx={{display: "flex", justifyContent:"center", alignItems: "center"}}>
          <List>
            <ListItem>
              <ListItemIcon onClick={() => setAddNewFieldStatus(true)}>
                <AddIcon />
              </ListItemIcon>
            </ListItem>

            {addNewFieldStatus && (
              <>
                <ListItem>
                  <ListItemIcon>
                    <ExpandMoreIcon fontSize="small" />
                  </ListItemIcon>
                  <InputBase placeholder="field name" onChange={handleNewField} />
                </ListItem>
              </>
            )}

            {paletteMenu.map(
              (menu: string, i: number) =>
                palette[menu] && (
                  <>
                    <ListItem key={i}>
                      <ListItemIcon>
                        <ExpandMoreIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{t(menu)}</ListItemText>
                    </ListItem>

                    {paletteObj[menu]?.map((submenu: string, index: number) => (
                      <>
                        <ListItem key={index} sx={{ px: 20 }}>
                          <ListItemText>
                            {
                              <Typography>
                                {t(submenu)}
                                <strong>:</strong>
                              </Typography>
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
                              // defaultValue={palette[menu][submenu] || ""}
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
                )
            )}
            <ListItem>
              <Box width={"100%"} display={"flex"} justifyContent={"center"} py={5}>
                <Button onClick={showPalette} variant="contained" startIcon={<ColorLensIcon />}>
                  {t("generateTheme")}
                </Button>
              </Box>
            </ListItem>
          </List>
        </Box>
        {outputStatus && (
          <Stack padding={5} display={"flex"} flexGrow={1}>
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
