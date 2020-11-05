import React from "react";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomChoiceGroup from "aod-dependencies/ChoiceGroup/CustomChoiceGroup";
import { IChoiceGroupOption } from "aod-dependencies/ChoiceGroup/ChoiceGroup.types";
import "./App.css";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };

  const optionsChoiceGroup: IChoiceGroupOption[] = [
    { key: "A", text: "Option A" },
    { key: "B", text: "Option B", disabled: true },
    { key: "C", text: "Option C" },
    { key: "D", text: "Option D" },
  ];

  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Disable" onChange={onChangeDisable} />
        </div>
        <CustomChoiceGroup
          options={optionsChoiceGroup}
          defaultSelectedKey="B"
          label="Pick one"
          darkMode={darkMode}
          disabled={disabled}
        />
      </Wrapper>
    </div>
  );
}

export default App;
