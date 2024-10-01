"use client";

import { createContext, useContext } from "react";
import { createContextualCan } from "@casl/react";
// import defineAbilityFor from "./ability";
import Ability from "./Ability";

const AbilityContext = createContext(Ability);
export const Can = createContextualCan(AbilityContext.Consumer);

export const AbilityWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AbilityContext.Provider value={Ability}>
      {children}
    </AbilityContext.Provider>
  );
};

export function useAbilityContext() {
  return useContext(AbilityContext);
}
