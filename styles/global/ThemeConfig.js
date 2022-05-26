const theme = {
  // primaryColour: "#FC5156",
  primaryColour: "#EA3D42",
  secondaryColour: "#301850",
  light: "#FAFAFA",
  body: "#1E1B21",
  primaryFont: "Roboto",
  secondaryFont: "Raleway",
  backgroundColour: "white",
  success: "#92B76B",
  error: "#D11117",
  status: "#A1D1ED",
  warning: "#EE9F35",
};

export default theme;

export const size = {
  mobile: "375px",
  mobile_large: "435px",
  small_tablet: "580px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  desktop_large: "1400px",
};

export const mediaQ = {
  mobile: `(min-width: ${size.mobile})`,
  mobile_large: `(min-width: ${size.mobile_large})`,
  small_tablet: `(min-width: ${size.small_tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktop_large: `(min-width: ${size.desktop_large})`,
};
