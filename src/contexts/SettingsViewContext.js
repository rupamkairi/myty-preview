import React, { useContext, useState, useEffect } from "react";

const SettingsViewContext = React.createContext();

export function useSettingsView() {
  return useContext(SettingsViewContext);
}

export function SettingsViewProvider({ children }) {
  const [currentSettingsView, setCurrentSettingsView] = useState(0);

  function changeSettingsView(viewIndex) {
    // console.log(viewIndex);
    setCurrentSettingsView(viewIndex);
  }

  useEffect(() => {
    setCurrentSettingsView(0);
    return;
  }, []);

  return (
    <SettingsViewContext.Provider
      value={{ currentSettingsView, changeSettingsView }}
    >
      {children}
    </SettingsViewContext.Provider>
  );
}
