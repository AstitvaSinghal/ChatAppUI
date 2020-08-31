const toUpperCaseFirst = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

export const space = 5;

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
