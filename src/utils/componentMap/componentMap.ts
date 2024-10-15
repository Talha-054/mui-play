
export interface componentMapType {
      [key: string] : ()=> Promise<any>
}


export const componentMap: componentMapType = {
      Accordion: () => import(`@mui/material/Accordion`),
      AccordionActions: () => import(`@mui/material/AccordionActions`),
      AccordionDetails: () => import(`@mui/material/AccordionDetails`),
      AccordionSummary: () => import(`@mui/material/AccordionSummary`),
      Alert: () => import(`@mui/material/Alert`),
      AlertTitle: () => import(`@mui/material/AlertTitle`),
      AppBar: () => import(`@mui/material/AppBar`),
      Autocomplete: () => import(`@mui/material/Autocomplete`),
      Avatar: () => import(`@mui/material/Avatar`),
      AvatarGroup: () => import(`@mui/material/AvatarGroup`),
      Backdrop: () => import(`@mui/material/Backdrop`),
      Badge: () => import(`@mui/material/Badge`),
      BottomNavigation: () => import(`@mui/material/BottomNavigation`),
      BottomNavigationAction: () => import(`@mui/material/BottomNavigationAction`),
      Box: () => import(`@mui/material/Box`),
      Breadcrumbs: () => import(`@mui/material/Breadcrumbs`),
      Button: () => import(`@mui/material/Button`),
      ButtonBase: () => import(`@mui/material/ButtonBase`),
      ButtonGroup: () => import(`@mui/material/ButtonGroup`),
      Card: () => import(`@mui/material/Card`),
      CardActionArea: () => import(`@mui/material/CardActionArea`),
      CardActions: () => import(`@mui/material/CardActions`),
      CardContent: () => import(`@mui/material/CardContent`),
      CardHeader: () => import(`@mui/material/CardHeader`),
      CardMedia: () => import(`@mui/material/CardMedia`),
      Checkbox: () => import(`@mui/material/Checkbox`),
      Chip: () => import(`@mui/material/Chip`),
      CircularProgress: () => import(`@mui/material/CircularProgress`),
      ClickAwayListener: () => import(`@mui/material/ClickAwayListener`),
      Collapse: () => import(`@mui/material/Collapse`),
      Container: () => import(`@mui/material/Container`),
      CssBaseline: () => import(`@mui/material/CssBaseline`),
      Dialog: () => import(`@mui/material/Dialog`),
      DialogActions: () => import(`@mui/material/DialogActions`),
      DialogContent: () => import(`@mui/material/DialogContent`),
      DialogContentText: () => import(`@mui/material/DialogContentText`),
      DialogTitle: () => import(`@mui/material/DialogTitle`),
      Divider: () => import(`@mui/material/Divider`),
      Drawer: () => import(`@mui/material/Drawer`),
      Fab: () => import(`@mui/material/Fab`),
      Fade: () => import(`@mui/material/Fade`),
      FilledInput: () => import(`@mui/material/FilledInput`),
      FormControl: () => import(`@mui/material/FormControl`),
      FormControlLabel: () => import(`@mui/material/FormControlLabel`),
      FormGroup: () => import(`@mui/material/FormGroup`),
      FormHelperText: () => import(`@mui/material/FormHelperText`),
      FormLabel: () => import(`@mui/material/FormLabel`),
      Grid: () => import(`@mui/material/Grid`),
      Grow: () => import(`@mui/material/Grow`),
      Hidden: () => import(`@mui/material/Hidden`),
      Icon: () => import(`@mui/material/Icon`),
      IconButton: () => import(`@mui/material/IconButton`),
      ImageList: () => import(`@mui/material/ImageList`),
      ImageListItem: () => import(`@mui/material/ImageListItem`),
      ImageListItemBar: () => import(`@mui/material/ImageListItemBar`),
      Input: () => import(`@mui/material/Input`),
      InputAdornment: () => import(`@mui/material/InputAdornment`),
      InputBase: () => import(`@mui/material/InputBase`),
      InputLabel: () => import(`@mui/material/InputLabel`),
      LinearProgress: () => import(`@mui/material/LinearProgress`),
      Link: () => import(`@mui/material/Link`),
      List: () => import(`@mui/material/List`),
      ListItem: () => import(`@mui/material/ListItem`),
      ListItemAvatar: () => import(`@mui/material/ListItemAvatar`),
      ListItemButton: () => import(`@mui/material/ListItemButton`),
      ListItemIcon: () => import(`@mui/material/ListItemIcon`),
      ListItemSecondaryAction: () => import(`@mui/material/ListItemSecondaryAction`),
      ListItemText: () => import(`@mui/material/ListItemText`),
      ListSubheader: () => import(`@mui/material/ListSubheader`),
      Menu: () => import(`@mui/material/Menu`),
      MenuItem: () => import(`@mui/material/MenuItem`),
      MenuList: () => import(`@mui/material/MenuList`),
      MobileStepper: () => import(`@mui/material/MobileStepper`),
      Modal: () => import(`@mui/material/Modal`),
      NativeSelect: () => import(`@mui/material/NativeSelect`),
      OutlinedInput: () => import(`@mui/material/OutlinedInput`),
      Pagination: () => import(`@mui/material/Pagination`),
      PaginationItem: () => import(`@mui/material/PaginationItem`),
      Paper: () => import(`@mui/material/Paper`),
      Popover: () => import(`@mui/material/Popover`),
      Popper: () => import(`@mui/material/Popper`),
      Portal: () => import(`@mui/material/Portal`),
      Radio: () => import(`@mui/material/Radio`),
      RadioGroup: () => import(`@mui/material/RadioGroup`),
      Rating: () => import(`@mui/material/Rating`),
      ScopedCssBaseline: () => import(`@mui/material/ScopedCssBaseline`),
      Select: () => import(`@mui/material/Select`),
      Skeleton: () => import(`@mui/material/Skeleton`),
      Slide: () => import(`@mui/material/Slide`),
      Slider: () => import(`@mui/material/Slider`),
      Snackbar: () => import(`@mui/material/Snackbar`),
      SnackbarContent: () => import(`@mui/material/SnackbarContent`),
      SpeedDial: () => import(`@mui/material/SpeedDial`),
      SpeedDialAction: () => import(`@mui/material/SpeedDialAction`),
      SpeedDialIcon: () => import(`@mui/material/SpeedDialIcon`),
      Stack: () => import(`@mui/material/Stack`),
      Step: () => import(`@mui/material/Step`),
      StepButton: () => import(`@mui/material/StepButton`),
      StepConnector: () => import(`@mui/material/StepConnector`),
      StepContent: () => import(`@mui/material/StepContent`),
      StepIcon: () => import(`@mui/material/StepIcon`),
      StepLabel: () => import(`@mui/material/StepLabel`),
      Stepper: () => import(`@mui/material/Stepper`),
      SvgIcon: () => import(`@mui/material/SvgIcon`),
      SwipeableDrawer: () => import(`@mui/material/SwipeableDrawer`),
      Switch: () => import(`@mui/material/Switch`),
      Tab: () => import(`@mui/material/Tab`),
      Table: () => import(`@mui/material/Table`),
      TableBody: () => import(`@mui/material/TableBody`),
      TableCell: () => import(`@mui/material/TableCell`),
      TableContainer: () => import(`@mui/material/TableContainer`),
      TableFooter: () => import(`@mui/material/TableFooter`),
      TableHead: () => import(`@mui/material/TableHead`),
      TablePagination: () => import(`@mui/material/TablePagination`),
      TableRow: () => import(`@mui/material/TableRow`),
      TableSortLabel: () => import(`@mui/material/TableSortLabel`),
      Tabs: () => import(`@mui/material/Tabs`),
      TabScrollButton: () => import(`@mui/material/TabScrollButton`),
      TextField: () => import(`@mui/material/TextField`),
      ToggleButton: () => import(`@mui/material/ToggleButton`),
      ToggleButtonGroup: () => import(`@mui/material/ToggleButtonGroup`),
      Toolbar: () => import(`@mui/material/Toolbar`),
      Tooltip: () => import(`@mui/material/Tooltip`),
      Typography: () => import(`@mui/material/Typography`),
      Zoom: () => import(`@mui/material/Zoom`),
      "": () => import(`@mui/material`),
};
    