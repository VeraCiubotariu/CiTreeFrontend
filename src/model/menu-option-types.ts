export type MenuOption = {
  optionName: string;
  onClick: () => void;
};

export type MenuTypes = {
  topOptions: MenuOption[];
  bottomOptions: MenuOption[];
};
