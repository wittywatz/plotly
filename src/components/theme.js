import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "--plotly",
};

const colors = {
  primary: "#7a76ff",
  textColorLight: "#7e8489",
  textColorDark: "#A2AAB8",
  bgForm: "#0D0d0d",
  borderLight: "#ECECEC",
  borderDark: "#282D33",
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "#0c0c0c")(props),
      },
    }),
  },
});

export default theme;
