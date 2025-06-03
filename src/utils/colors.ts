export interface ColorScheme {
  name: "dark" | "light";
  fg_color: string;
  fg_color_1: string;
  fg_color_2: string;
  fg_color_3: string;
  bg_color: string;
  bg_color_1: string;
  bg_color_2: string;
  bg_color_3: string;

  blue_fg: string;
  purple_fg: string;
  pink_fg: string;
  yellow_fg: string;
  green_fg: string;
  indigo_fg: string;

  blue_bg: string;
  purple_bg: string;
  pink_bg: string;
  yellow_bg: string;
  green_bg: string;
  indigo_bg: string;
}

export const colors = {
  dm_black: "#161616",
  dm_blur: "#1C1C1E",
  dm_dark_500: "#1C1C1E",
  dm_dark_400: "#2C2C2E",
  dm_dark_300: "#3A3A3C",
  dm_dark_200: "#48484A",
  dm_dark_100: "#636366",
  dm_light_300: "#8E8E93",
  dm_light_200: "#AEAEB2",
  dm_light_100: "#C7C7CC",
  white: "#FFFFFF",

  blue_400: "#57B0FB",
  purple_500: "#9FA6FF",
  pink_800: "#FC5D7D",
  yellow_500: "#FFC555",
  green_500: "#56C288",
  indigo_400: "#79A1F8",

  blue_dark: "#22282E",
  purple_dark: "#24242E",
  pink_dark: "#332024",
  yellow_dark: "#29241A",
  green_dark: "#172920",
  indigo_dark: "#202739",
};

export const dark_color_scheme: ColorScheme = {
  name: "dark",
  fg_color: "#F6FCDF",
  fg_color_1: colors.dm_light_100,
  fg_color_2: colors.dm_light_200,
  fg_color_3: colors.dm_light_300,
  bg_color: "#1A1A19",
  bg_color_1: "#31511E",
  bg_color_2: "#859F3D",
  bg_color_3: "#F6FCDF",

  blue_fg: colors.blue_400,
  purple_fg: colors.purple_500,
  pink_fg: colors.pink_800,
  yellow_fg: colors.yellow_500,
  green_fg: colors.green_500,
  indigo_fg: colors.indigo_400,

  blue_bg: colors.blue_dark,
  purple_bg: colors.purple_dark,
  pink_bg: colors.pink_dark,
  yellow_bg: colors.yellow_dark,
  green_bg: colors.green_dark,
  indigo_bg: colors.indigo_dark,
};

export const light_color_scheme: ColorScheme = {
  name: "light",
  fg_color: "#1A1A19",
  fg_color_1: colors.dm_blur,
  fg_color_2: colors.dm_dark_500,
  fg_color_3: colors.dm_dark_400,
  bg_color: "#FFFDF6",
  bg_color_1: "#DDEB9D",
  bg_color_2: '#c6c677',
  bg_color_3: "#A0C878",

  blue_bg: colors.blue_400,
  purple_bg: colors.purple_500,
  pink_bg: colors.pink_800,
  yellow_bg: colors.yellow_500,
  green_bg: colors.green_500,
  indigo_bg: colors.indigo_400,

  blue_fg: colors.blue_dark,
  purple_fg: colors.purple_dark,
  pink_fg: colors.pink_dark,
  yellow_fg: colors.yellow_dark,
  green_fg: colors.green_dark,
  indigo_fg: colors.indigo_dark,
};
