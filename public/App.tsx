import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../theme/theme";
import {
  MainSection,
  Extensions_list,
  Extensions_list_title,
  Btn,
  Card,
} from "../styles/index";
import CardComp from "../components/CardComp";
import HeaderSections from "../sections/HeaderSections";
function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  const [toggleState, setToggleState] = useState([
    {
      logo: "./assets/icon-moon.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-speed-boost.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-json-wizard.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-markup-notes.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-grid-guides.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      logo: "./assets/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      logo: "./assets/logo-console-plus.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ]);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <MainSection>
        <GlobalStyles />
        {/* Header section */}
        <HeaderSections theme={theme} toggleTheme={toggleTheme} />
        <div style={{ margin: "50px" }}></div>
        {/*End Header section */}
        <Extensions_list>
          <Extensions_list_title>Extensions List</Extensions_list_title>
          <div>
            <Btn>asc</Btn>
            <Btn>asc</Btn>
            <Btn>asc</Btn>
          </div>
        </Extensions_list>
        <div style={{ margin: "100px" }}></div>
        <div className="card_wrapper">
          {toggleState.map((item) => {
            return (
              <CardComp
                description={item.description}
                isActive={item.isActive}
                logo={item.logo}
                name={item.name}
              />
            );
          })}
        </div>
      </MainSection>
    </ThemeProvider>
  );
}

export default App;
