// Button Props
      export interface ButtonProps {
      variant?: 'text' | 'outlined' | 'contained';
      color?: 'default' | 'inherit' | 'primary' | 'secondary';
      size?: 'small' | 'medium' | 'large';
      disabled?: boolean;
      disableElevation?: boolean;
      disableRipple?: boolean;
      fullWidth?: boolean;
      href?: string;
      startIcon?: React.ReactNode;
      endIcon?: React.ReactNode;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      type?: 'button' | 'submit' | 'reset';
      tabIndex?: number;
      title?: string;
      'aria-label'?: string;
      'aria-describedby'?: string;
    }
    
    // TextField Props
    export interface TextFieldProps {
      variant?: 'filled' | 'outlined' | 'standard';
      label?: string;
      value?: string | number;
      defaultValue?: string | number;
      helperText?: React.ReactNode;
      placeholder?: string;
      type?: string;
      fullWidth?: boolean;
      required?: boolean;
      disabled?: boolean;
      error?: boolean;
      size?: 'small' | 'medium' | 'large';
      multiline?: boolean;
      rows?: number;
      InputProps?: object; // replace with specific props if needed
      InputLabelProps?: object; // replace with specific props if needed
      select?: boolean;
      SelectProps?: object; // replace with specific props if needed
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      name?: string;
      id?: string;
      autoComplete?: string;
      autoFocus?: boolean;
      inputRef?: React.Ref<HTMLInputElement>;
      'aria-label'?: string;
      'aria-describedby'?: string;
      color?: 'default' | 'primary' | 'secondary';
    }
    
    // Typography Props
    export interface TypographyProps {
      variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
      align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
      color?: 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
      gutterBottom?: boolean;
      noWrap?: boolean;
      paragraph?: boolean;
      component?: React.ElementType;
      className?: string;
      children?: React.ReactNode;
    }
    
    // Card Props
    export interface CardProps {
      raised?: boolean;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      elevation?: number;
      square?: boolean;
    }
    
    // CardContent Props
    export interface CardContentProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // IconButton Props
    export interface IconButtonProps {
      color?: 'default' | 'inherit' | 'primary' | 'secondary';
      disabled?: boolean;
      disableRipple?: boolean;
      edge?: 'start' | 'end' | false;
      size?: 'small' | 'medium' | 'large';
      children?: React.ReactNode;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      className?: string;
      component?: React.ElementType;
      title?: string;
      'aria-label'?: string;
      'aria-describedby'?: string;
    }


// Checkbox Props
      export interface CheckboxProps {
      checked?: boolean;
      defaultChecked?: boolean;
      color?: 'default' | 'primary' | 'secondary';
      disabled?: boolean;
      indeterminate?: boolean;
      size?: 'small' | 'medium' | 'large';
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      name?: string;
      inputProps?: object; // replace with specific props if needed
      'aria-label'?: string;
      'aria-describedby'?: string;
      className?: string;
    }
    
    // Radio Props
    export interface RadioProps {
      checked?: boolean;
      defaultChecked?: boolean;
      color?: 'default' | 'primary' | 'secondary';
      disabled?: boolean;
      size?: 'small' | 'medium' | 'large';
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      name?: string;
      inputProps?: object; // replace with specific props if needed
      'aria-label'?: string;
      'aria-describedby'?: string;
      className?: string;
    }
    
    // FormControl Props
    export interface FormControlProps {
      fullWidth?: boolean;
      required?: boolean;
      error?: boolean;
      disabled?: boolean;
      className?: string;
      component?: React.ElementType;
      margin?: 'none' | 'dense' | 'normal';
      variant?: 'outlined' | 'filled' | 'standard';
    }
    
    // Select Props
    export interface SelectProps {
      autoWidth?: boolean;
      displayEmpty?: boolean;
      labelId?: string;
      value?: string | number;
      defaultValue?: string | number;
      onChange?: React.ChangeEventHandler<{ value: unknown }>;
      disabled?: boolean;
      error?: boolean;
      fullWidth?: boolean;
      IconComponent?: React.ElementType;
      inputProps?: object; // replace with specific props if needed
      MenuProps?: object; // replace with specific props if needed
      multiple?: boolean;
      native?: boolean;
      renderValue?: (value: unknown) => React.ReactNode;
      variant?: 'outlined' | 'filled' | 'standard';
      className?: string;
      id?: string;
      name?: string;
      autoFocus?: boolean;
      label?: string;
    }
    
    // AppBar Props
    export interface AppBarProps {
      color?: 'default' | 'inherit' | 'primary' | 'secondary';
      position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
      className?: string;
      children?: React.ReactNode;
      component?: React.ElementType;
      elevation?: number;
    }
    
    // Drawer Props
    export interface DrawerProps {
      anchor?: 'left' | 'top' | 'right' | 'bottom';
      open?: boolean;
      onClose?: () => void;
      children?: React.ReactNode;
      className?: string;
      PaperProps?: object; // replace with specific props if needed
      variant?: 'permanent' | 'persistent' | 'temporary';
      elevation?: number;
    }
    
    // Dialog Props
    export interface DialogProps {
      open?: boolean;
      onClose?: () => void;
      fullWidth?: boolean;
      maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
      children?: React.ReactNode;
      className?: string;
      scroll?: 'body' | 'paper';
      fullScreen?: boolean;
      TransitionComponent?: React.ElementType;
      PaperProps?: object; // replace with specific props if needed
    }

    
    // Snackbar Props
      export interface SnackbarProps {
      open?: boolean;
      autoHideDuration?: number;
      onClose?: (event: React.SyntheticEvent | undefined, reason?: string) => void;
      message?: React.ReactNode;
      action?: React.ReactNode;
      anchorOrigin?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
      };
      children?: React.ReactNode;
      className?: string;
      TransitionComponent?: React.ElementType;
    }
    
    // Grid Props
    export interface GridProps {
      container?: boolean;
      item?: boolean;
      spacing?: number;
      direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
      justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
      alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
      xs?: boolean | number;
      sm?: boolean | number;
      md?: boolean | number;
      lg?: boolean | number;
      xl?: boolean | number;
      zeroMinWidth?: boolean;
      children?: React.ReactNode;
      className?: string;
      wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    }
    
    // Paper Props
    export interface PaperProps {
      elevation?: number;
      variant?: 'elevation' | 'outlined';
      square?: boolean;
      children?: React.ReactNode;
      className?: string;
    }
    
    // Menu Props
    export interface MenuProps {
      anchorEl?: HTMLElement | null;
      open?: boolean;
      onClose?: () => void;
      children?: React.ReactNode;
      className?: string;
      PaperProps?: object; // replace with specific props if needed
      MenuListProps?: object; // replace with specific props if needed
      TransitionComponent?: React.ElementType;
    }
    
    // CircularProgress Props
    export interface CircularProgressProps {
      color?: 'inherit' | 'primary' | 'secondary';
      size?: number;
      thickness?: number;
      value?: number;
      className?: string;
    }
    
    // LinearProgress Props
    export interface LinearProgressProps {
      color?: 'inherit' | 'primary' | 'secondary';
      value?: number;
      valueBuffer?: number;
      variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
      className?: string;
    }
    
    // Icon Props
    export interface IconProps {
      baseClassName?: string;
      color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary';
      fontSize?: 'inherit' | 'default' | 'small' | 'medium' | 'large';
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // Switch Props
    export interface SwitchProps {
      checked?: boolean;
      defaultChecked?: boolean;
      disabled?: boolean;
      edge?: 'start' | 'end' | false;
      color?: 'default' | 'primary' | 'secondary';
      inputProps?: object; // replace with specific props if needed
      size?: 'small' | 'medium';
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      name?: string;
      inputRef?: React.Ref<HTMLInputElement>;
      'aria-label'?: string;
      'aria-describedby'?: string;
      className?: string;
    }
    
    // RadioGroup Props
    export interface RadioGroupProps {
      defaultValue?: string | number;
      value?: string | number;
      name?: string;
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      row?: boolean;
      className?: string;
      children?: React.ReactNode;
    }
    
    // Tooltip Props
    export interface TooltipProps {
      arrow?: boolean;
      disableFocusListener?: boolean;
      disableHoverListener?: boolean;
      disableTouchListener?: boolean;
      enterDelay?: number;
      enterNextDelay?: number;
      enterTouchDelay?: number;
      leaveDelay?: number;
      leaveTouchDelay?: number;
      placement?: 'bottom' | 'top' | 'left' | 'right' | 'auto';
      title?: React.ReactNode;
      open?: boolean;
      onClose?: () => void;
      onOpen?: () => void;
      className?: string;
    }
    
    // Badge Props
    export interface BadgeProps {
      badgeContent?: React.ReactNode;
      color?: 'default' | 'primary' | 'secondary' | 'error';
      invisible?: boolean;
      max?: number;
      overlap?: 'circle' | 'rectangular';
      showZero?: boolean;
      variant?: 'standard' | 'dot';
      children?: React.ReactNode;
      anchorOrigin?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right';
      };
      className?: string;
      component?: React.ElementType;
    }
    
    // Avatar Props
    export interface AvatarProps {
      alt?: string;
      src?: string;
      srcSet?: string;
      variant?: 'circular' | 'rounded' | 'square';
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      imgProps?: object; // replace with specific props if needed
      sizes?: string;
    }
    
    // List Props
    export interface ListProps {
      dense?: boolean;
      disablePadding?: boolean;
      subheader?: React.ReactNode;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // ListItem Props
    export interface ListItemProps {
      button?: boolean;
      disabled?: boolean;
      divider?: boolean;
      selected?: boolean;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      alignItems?: 'flex-start' | 'center' | 'flex-end';
      autoFocus?: boolean;
    }
    
    // ListItemIcon Props
    export interface ListItemIconProps {
      children?: React.ReactNode;
      className?: string;
    }
    
    // ListItemText Props
    export interface ListItemTextProps {
      primary?: React.ReactNode;
      secondary?: React.ReactNode;
      primaryTypographyProps?: object; // replace with specific props if needed
      secondaryTypographyProps?: object; // replace with specific props if needed
      children?: React.ReactNode;
      className?: string;
      inset?: boolean;
    }

    // ListItemAvatar Props
      export interface ListItemAvatarProps {
      children?: React.ReactNode;
      className?: string;
    }
    
    // ListSubheader Props
    export interface ListSubheaderProps {
      color?: 'default' | 'primary' | 'secondary';
      disableGutters?: boolean;
      disableSticky?: boolean;
      inset?: boolean;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // Divider Props
    export interface DividerProps {
      absolute?: boolean;
      flexItem?: boolean;
      light?: boolean;
      orientation?: 'horizontal' | 'vertical';
      textAlign?: 'left' | 'center' | 'right';
      variant?: 'fullWidth' | 'inset' | 'middle';
      className?: string;
      children?: React.ReactNode;
      component?: React.ElementType;
    }
    
    // BottomNavigation Props
    export interface BottomNavigationProps {
      value?: string | number;
      onChange?: (event: React.ChangeEvent<unknown>, value: string | number) => void;
      showLabels?: boolean;
      className?: string;
      children?: React.ReactNode;
    }
    
    // BottomNavigationAction Props
    export interface BottomNavigationActionProps {
      label?: string;
      icon?: React.ReactNode;
      showLabel?: boolean;
      className?: string;
      value?: string | number;
    }
    
    // SnackbarContent Props
    export interface SnackbarContentProps {
      action?: React.ReactNode;
      message?: React.ReactNode;
      className?: string;
    }
    
    // Alert Props
    export interface AlertProps {
      action?: React.ReactNode;
      closeText?: string;
      color?: 'default' | 'inherit' | 'success' | 'info' | 'warning' | 'error';
      icon?: React.ReactNode;
      iconMapping?: object; // replace with specific props if needed
      onClose?: () => void;
      role?: string;
      severity?: 'success' | 'info' | 'warning' | 'error';
      variant?: 'filled' | 'outlined' | 'standard';
      children?: React.ReactNode;
      className?: string;
    }
    
    // Chip Props
    export interface ChipProps {
      avatar?: React.ReactNode;
      clickable?: boolean;
      color?: 'default' | 'primary' | 'secondary';
      deleteIcon?: React.ReactNode;
      disabled?: boolean;
      icon?: React.ReactNode;
      label?: React.ReactNode;
      onDelete?: () => void;
      size?: 'small' | 'medium' | 'large';
      variant?: 'filled' | 'outlined';
      className?: string;
    }
    
    // Table Props
    export interface TableProps {
      padding?: 'default' | 'checkbox' | 'none';
      size?: 'small' | 'medium' | 'large';
      stickyHeader?: boolean;
      className?: string;
      children?: React.ReactNode;
      component?: React.ElementType;
    }
    
    // TableRow Props
    export interface TableRowProps {
      hover?: boolean;
      selected?: boolean;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // TableCell Props
    export interface TableCellProps {
      align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
      padding?: 'default' | 'checkbox' | 'none';
      size?: 'small' | 'medium' | 'large';
      sortDirection?: 'asc' | 'desc' | false;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      colSpan?: number;
      scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    }
    
    // TableHead Props
    export interface TableHeadProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // TableBody Props
    export interface TableBodyProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // TableFooter Props
    export interface TableFooterProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // TableContainer Props
    export interface TableContainerProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // Accordion Props
    export interface AccordionProps {
      defaultExpanded?: boolean;
      disabled?: boolean;
      expanded?: boolean;
      onChange?: (event: React.ChangeEvent<unknown>, expanded: boolean) => void;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // AccordionSummary Props
    export interface AccordionSummaryProps {
      expandIcon?: React.ReactNode;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      'aria-controls'?: string;
      id?: string;
    }
    
    // AccordionDetails Props
    export interface AccordionDetailsProps {
      children?: React.ReactNode;
      className?: string;
    }
    
    // Tabs Props
    export interface TabsProps {
      value?: string | number;
      onChange?: (event: React.ChangeEvent<unknown>, newValue: string | number) => void;
      variant?: 'standard' | 'scrollable' | 'fullWidth';
      scrollButtons?: 'auto' | 'on' | 'off';
      indicatorColor?: 'primary' | 'secondary';
      textColor?: 'inherit' | 'primary' | 'secondary';
      className?: string;
      children?: React.ReactNode;
      orientation?: 'horizontal' | 'vertical';
    }
    
    // Tab Props
    export interface TabProps {
      label?: React.ReactNode;
      icon?: React.ReactNode;
      value?: string | number;
      iconPosition?: 'start' | 'end' | 'top' | 'bottom';
      disabled?: boolean;
      className?: string;
      wrapped?: boolean;
    }


    // Stepper Props
      export interface StepperProps {
      activeStep?: number;
      alternativeLabel?: boolean;
      nonLinear?: boolean;
      orientation?: 'horizontal' | 'vertical';
      children?: React.ReactNode;
      className?: string;
    }
    
    // Step Props
    export interface StepProps {
      active?: boolean;
      completed?: boolean;
      disabled?: boolean;
      children?: React.ReactNode;
      className?: string;
    }
    
    // StepLabel Props
    export interface StepLabelProps {
      optional?: React.ReactNode;
      error?: boolean;
      icon?: React.ReactNode;
      children?: React.ReactNode;
      className?: string;
    }
    
    // StepContent Props
    export interface StepContentProps {
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // Skeleton Props
    export interface SkeletonProps {
      animation?: 'pulse' | 'wave' | false;
      variant?: 'text' | 'rect' | 'circle';
      width?: string | number;
      height?: string | number;
      className?: string;
    }
    
    // CardActions Props
    export interface CardActionsProps {
      disableSpacing?: boolean;
      children?: React.ReactNode;
      className?: string;
    }
    
    // CardHeader Props
    export interface CardHeaderProps {
      avatar?: React.ReactNode;
      action?: React.ReactNode;
      title?: React.ReactNode;
      subheader?: React.ReactNode;
      className?: string;
      titleTypographyProps?: object; // replace with specific props if needed
      subheaderTypographyProps?: object; // replace with specific props if needed
    }
    
    // Breadcrumbs Props
    export interface BreadcrumbsProps {
      'aria-label'?: string;
      separator?: React.ReactNode;
      children?: React.ReactNode;
      className?: string;
      maxItems?: number;
      itemsBeforeCollapse?: number;
      itemsAfterCollapse?: number;
    }
    
    // AvatarGroup Props
    export interface AvatarGroupProps {
      max?: number;
      spacing?: number;
      variant?: 'circular' | 'rounded' | 'square';
      className?: string;
      children?: React.ReactNode;
    }
    
    // GridList Props
    export interface GridListProps {
      cellHeight?: number | 'auto';
      spacing?: number;
      cols?: number;
      children?: React.ReactNode;
      className?: string;
    }
    
    // GridListTile Props
    export interface GridListTileProps {
      cols?: number;
      rows?: number;
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
    }
    
    // GridListTileBar Props
    export interface GridListTileBarProps {
      actionIcon?: React.ReactNode;
      actionPosition?: 'left' | 'right';
      title?: React.ReactNode;
      subtitle?: React.ReactNode;
      className?: string;
      titlePosition?: 'top' | 'bottom';
    }
    
    // AccordionActions Props
    export interface AccordionActionsProps {
      disableSpacing?: boolean;
      children?: React.ReactNode;
      className?: string;
    }
    
    // ButtonBase Props
    export interface ButtonBaseProps {
      centerRipple?: boolean;
      disabled?: boolean;
      disableRipple?: boolean;
      disableTouchRipple?: boolean;
      focusRipple?: boolean;
      focusVisibleClassName?: string;
      TouchRippleProps?: object; // replace with specific props if needed
      children?: React.ReactNode;
      className?: string;
      component?: React.ElementType;
      onClick?: React.MouseEventHandler<HTMLElement>;
    }
    
    // InputBase Props
    export interface InputBaseProps {
      autoComplete?: string;
      autoFocus?: boolean;
      defaultValue?: string | number;
      disabled?: boolean;
      error?: boolean;
      fullWidth?: boolean;
      id?: string;
      inputComponent?: React.ElementType;
      inputProps?: object; // replace with specific props if needed
      inputRef?: React.Ref<any>;
      multiline?: boolean;
      name?: string;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      rows?: number;
      type?: string;
      value?: string | number;
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      className?: string;
    }
    
    // Pagination Props
    export interface PaginationProps {
      count: number;
      page: number;
      onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
      size?: 'small' | 'medium' | 'large';
      color?: 'standard' | 'primary' | 'secondary';
      variant?: 'text' | 'outlined';
      shape?: 'rounded' | 'circular';
      className?: string;
      boundaryCount?: number;
      defaultPage?: number;
      disabled?: boolean;
      hideNextButton?: boolean;
      hidePrevButton?: boolean;
      showFirstButton?: boolean;
      showLastButton?: boolean;
    }
    
    // PaginationItem Props
    export interface PaginationItemProps {
      color?: 'standard' | 'primary' | 'secondary';
      component?: React.ElementType;
      disabled?: boolean;
      page: number;
      selected?: boolean;
      shape?: 'rounded' | 'circular';
      size?: 'small' | 'medium' | 'large';
      className?: string;
      type?: 'page' | 'next' | 'previous' | 'first' | 'last';
      variant?: 'text' | 'outlined';
    }


    // Popover Props
      export interface PopoverProps {
      anchorEl?: HTMLElement | null;
      anchorOrigin?: {
        vertical: 'top' | 'bottom' | 'center';
        horizontal: 'left' | 'right' | 'center';
      };
      anchorPosition?: {
        top: number;
        left: number;
      };
      anchorReference?: 'anchorEl' | 'none';
      disableAutoFocus?: boolean;
      disableEnforceFocus?: boolean;
      disablePortal?: boolean;
      hideBackdrop?: boolean;
      keepMounted?: boolean;
      onClose?: (event: React.SyntheticEvent<Element, Event>, reason: 'backdropClick' | 'escapeKeyDown') => void;
      open: boolean;
      className?: string;
      children?: React.ReactNode;
      PaperProps?: object; // replace with specific props if needed
      TransitionComponent?: React.ElementType;
    }
    
    // MenuItem Props
    export interface MenuItemProps {
      autoFocus?: boolean;
      component?: React.ElementType;
      dense?: boolean;
      disabled?: boolean;
      divider?: boolean;
      selected?: boolean;
      children?: React.ReactNode;
      className?: string;
      onClick?: React.MouseEventHandler<HTMLElement>;
    }
    
    // Collapse Props
    export interface CollapseProps {
      in?: boolean;
      timeout?: number | { enter?: number; exit?: number };
      collapsedHeight?: string | number;
      orientation?: 'horizontal' | 'vertical';
      children?: React.ReactNode;
      className?: string;
    }
    
    // SpeedDial Props
    export interface SpeedDialProps {
      ariaLabel: string;
      direction?: 'up' | 'down' | 'left' | 'right';
      hidden?: boolean;
      icon: React.ReactNode;
      onClose?: () => void;
      onOpen?: () => void;
      open: boolean;
      children?: React.ReactNode;
      className?: string;
      FabProps?: object; // replace with specific props if needed
    }
    
    // SpeedDialAction Props
    export interface SpeedDialActionProps {
      icon: React.ReactNode;
      tooltipTitle?: React.ReactNode;
      tooltipOpen?: boolean;
      onClick?: React.MouseEventHandler<HTMLElement>;
      className?: string;
      FabProps?: object; // replace with specific props if needed
    }
    
    // SpeedDialIcon Props
    export interface SpeedDialIconProps {
      icon: React.ReactNode;
      openIcon?: React.ReactNode;
      className?: string;
    }
    
    // Slider Props
    export interface SliderProps {
      'aria-label'?: string;
      'aria-labelledby'?: string;
      defaultValue?: number | number[];
      disabled?: boolean;
      getAriaLabel?: (value: number) => string;
      getAriaValueText?: (value: number) => string;
      marks?: Array<{ value: number; label?: React.ReactNode }>;
      max?: number;
      min?: number;
      name?: string;
      onChange?: (event: Event, value: number | number[]) => void;
      onChangeCommitted?: (event: Event, value: number | number[]) => void;
      orientation?: 'horizontal' | 'vertical';
      step?: number;
      track?: 'normal' | 'inverted' | 'false';
      value?: number | number[];
      valueLabelDisplay?: 'on' | 'off' | 'auto';
      valueLabelFormat?: (value: number) => string;
      className?: string;
    }
    
    // TabPanel Props
    export interface TabPanelProps {
      children?: React.ReactNode;
      value: any;
      index: any;
      className?: string;
    }
    
    
    
    