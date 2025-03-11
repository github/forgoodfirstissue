import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SunIcon } from "@primer/octicons-react";
import { MoonIcon } from "@primer/octicons-react";

import { Button } from "@primer/react-brand";

export const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <>
      <Button
        variant="subtle"
        size="medium"
        onClick={toggleColorMode}
        hasArrow={false}
        colorMode={colorMode}
      >
        {colorMode === "light" ? <MoonIcon size={24} fill="#fff" /> : <SunIcon size={24} />}
      </Button>
    </>
  );
};
