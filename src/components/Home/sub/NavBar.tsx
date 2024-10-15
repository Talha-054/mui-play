import { AppBar, IconButton, Autocomplete, TextField, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  updateCurrComponent,
  updateProps,
  updateStyles,
} from "../../../store/slices/componentSlice";

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
  "Divider",
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
  const dispatch = useAppDispatch();

  function handleCompChange(_e: React.SyntheticEvent<Element, Event>, newVal: String | null) {
    if (!newVal) return;

    dispatch(updateCurrComponent({ component: newVal }));
    dispatch(updateStyles({ styles: {} }));
    dispatch(updateProps({ props: {} }));
    console.log(componentData);
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar sx={{ position: "sticky", top: "0px" }}>
          <Toolbar>
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flexGrow: 1 }} variant="h6" fontWeight={700}>
              MUI-Play
            </Typography>
            <Autocomplete
              options={muiComponents}
              onChange={(e, newVal) => handleCompChange(e, newVal)}
              renderInput={(params) => <TextField placeholder="Select component" {...params} />}
              size="small"
              sx={{
                "&.MuiAutocomplete-root": {
                  backgroundColor: "white",

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
