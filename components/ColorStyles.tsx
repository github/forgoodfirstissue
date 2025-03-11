import { StylesConfig } from "react-select";

export const ColorStyles: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: "var(--brand-color-canvas-default)" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? "var(--brand-color-text-subtle)"
          : isFocused
            ? "var(--brand-color-focus)"
            : "var(--brand-color-canvas-default)",
      color: isDisabled ? "var(--brand-color-text-muted)" : "var(--brand-color-text-default)",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled ? "var(--brand-color-focus)" : undefined
      }
    };
  },
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--brand-color-canvas-default)",
    border: "1px solid var(--brand-color-border-default)"
  })
};
