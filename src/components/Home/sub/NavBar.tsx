import {
  AppBar,
  IconButton,
  Autocomplete,
  TextField,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  updateCurrComponent,
  updateProps,
  updateStyles,
} from "../../../store/slices/componentSlice";
import Fade from "@mui/material/Fade";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { toggleMode } from "../../../store/slices/themeSlice";
import { useTheme } from "@mui/material/styles";

const muiComponents: String[] = [
  "none",
  "Button",
  "IconButton",
  "TextField",
  "Checkbox",
  "Radio",
  "Switch",
  "Select",
  "Slider",
  "AppBar",
  "Toolbar",
  "Drawer",
  "Menu",
  "MenuItem",
  "Snackbar",
  "Dialog",
  "DialogTitle",
  "DialogContent",
  "DialogActions",
  "Card",
  "CardHeader",
  "CardContent",
  "CardActions",
  "Grid",
  "Container",
  "Typography",
  "Paper",
  "Boxider",
  "Avatar",
  "Badge",
  "Chip",
  "Table",
  "TableHead",
  "TableBody",
  "TableRow",
  "TableCell",
  "Tabs",
  "Tab",
  "Tooltip",
  "Progress",
  "LinearProgress",
  "CircularProgress",
  "Hidden",
  "ThemeProvider",
  "Box",
  "CssBaseline",
  "Stepper",
  "Breadcrumbs",
  "Fab",
  "Pagination",
  "Rating",
  "Accordion",
  "AccordionSummary",
  "AccordionDetails",
];

function NavBar() {
  const componentData = useAppSelector((state) => state.componentSlice);
  const mode = useAppSelector((state) => state.themeSlice.palette.mode);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (_e: React.MouseEvent, lngCode: string) => {
    setAnchorEl(null);
    if (lngCode) {
      i18n.changeLanguage(lngCode);
    }
  };

  function handleCompChange(_e: React.SyntheticEvent<Element, Event>, newVal: String | null) {
    if (!newVal) return;

    dispatch(updateCurrComponent({ component: newVal }));
    dispatch(updateStyles({ styles: {} }));
    dispatch(updateProps({ props: {} }));
    console.log(componentData);
  }

  function switchMode() {
    dispatch(toggleMode());
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          color="transparent"
          sx={{
            position: "sticky",
            top: "0px",
          }}
        >
          <Toolbar>
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flexGrow: 1,
                color: theme.palette.text.secondary,
              }}
              variant="h6"
              fontWeight={700}
            >
              MUI-Play
            </Typography>
            <Box>
              <IconButton onClick={handleClick}>
                <LanguageIcon fontSize="large" />
              </IconButton>

              <IconButton onClick={switchMode}>
                {mode == "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem selected={i18n.language == "en"} onClick={(e) => handleClose(e, "en")}>
                  {t("english")}
                </MenuItem>
                <MenuItem selected={i18n.language == "ja"} onClick={(e) => handleClose(e, "ja")}>
                  {t("japnese")}
                </MenuItem>
              </Menu>
            </Box>
            <Autocomplete
              options={muiComponents}
              onChange={(e, newVal) => handleCompChange(e, newVal)}
              renderInput={(params) => <TextField placeholder={t("selectComponent")} {...params} />}
              size="small"
              sx={{
                ml: 3,
                "&.MuiAutocomplete-root": {
                  minWidth: "250px",
                  borderRadius: "5px",
                },
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
