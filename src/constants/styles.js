const toUpperCaseFirst = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

export const space = 5;
export const colors = {
  transparent: "transparent",

  info: "#62B1F6",
  success: "#5cb85c",
  danger: "#d9534f",
  warning: "#f0ad4e",
  dark: "#000000",
  white: "#ffffff",
  light: "#f4f4f4",
  gray: "#e1e1e1",
};

export const combineStyles = (arr) => {
  let style = {};
  for (var i = 0; i < arr.length; i++) {
    style = { ...style, ...arr[i] };
  }
  return style;
};

export default {
  /* Font */
  fontRegular: {
    fontSize: 16,
  },
  fontBold: {
    fontWeight: "bold",
  },

  /* Colors */
  ...Object.keys(colors).reduce(
    (styles, key) => ({
      ...styles,
      [key]: { color: colors[key] },
      [`bg${toUpperCaseFirst(key)}`]: { backgroundColor: colors[key] },
    }),
    {}
  ),
  //text_color: Dark_Mode ? "rgb(211, 211, 211)" : "#ffffff",
  //backgroundColor: Dark_Mode ? Color_Theme : "rgba(233, 242, 246,0.9)",
  /* Border, Margin, Padding, Flex */

  ...[0, 1, 2, 3, 4, 5].reduce(
    (styles, value) => ({
      ...styles,

      [`b${value}`]: {
        border: `solid black ${value}px`,
      },
      [`bx${value}`]: {
        borderRightWidth: value,
        borderLeftWidth: value,
      },
      [`by${value}`]: {
        borderTopWidth: value,
        borderBottomWidth: value,
      },
      [`bt${value}`]: {
        borderTopWidth: value,
      },
      [`br${value}`]: {
        borderRightWidth: value,
      },
      [`bb${value}`]: {
        borderBottomWidth: value,
      },
      [`bl${value}`]: {
        borderLeftWidth: value,
      },

      [`m${value}`]: {
        marginTop: value * space,
        marginRight: value * space,
        marginBottom: value * space,
        marginLeft: value * space,
      },
      [`mx${value}`]: {
        marginRight: value * space,
        marginLeft: value * space,
      },
      [`my${value}`]: {
        marginTop: value * space,
        marginBottom: value * space,
      },
      [`mt${value}`]: {
        marginTop: value * space,
      },
      [`mr${value}`]: {
        marginRight: value * space,
      },
      [`mb${value}`]: {
        marginBottom: value * space,
      },
      [`ml${value}`]: {
        marginLeft: value * space,
      },

      [`p${value}`]: {
        paddingTop: value * space,
        paddingRight: value * space,
        paddingBottom: value * space,
        paddingLeft: value * space,
      },
      [`px${value}`]: {
        paddingRight: value * space,
        paddingLeft: value * space,
      },
      [`py${value}`]: {
        paddingTop: value * space,
        paddingBottom: value * space,
      },
      [`pt${value}`]: {
        paddingTop: value * space,
      },
      [`pr${value}`]: {
        paddingRight: value * space,
      },
      [`pb${value}`]: {
        paddingBottom: value * space,
      },
      [`pl${value}`]: {
        paddingLeft: value * space,
      },

      [`flex${value}`]: { flex: value },
    }),
    {}
  ),

  /* Text */
  ...["left", "center", "right", "justify"].reduce(
    (styles, value) => ({
      ...styles,
      [`text${toUpperCaseFirst(value)}`]: { textAlign: value },
    }),
    {}
  ),
};
