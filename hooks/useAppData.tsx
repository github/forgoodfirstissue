import { useContext } from "react";

import { AppDataContext } from "../context/AppDataContext";

export const useAppData = () => {
  const context = useContext(AppDssssataContext);

  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }

  return context;
};
