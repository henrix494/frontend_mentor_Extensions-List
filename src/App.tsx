import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../theme/theme";
import {
  MainSection,
  Extensions_list,
  Extensions_list_title,
  Btn,
} from "../styles/index";
import CardComp from "../components/CardComp";
import HeaderSections from "../sections/HeaderSections";
function App() {
  const [theme, setTheme] = useState("dark");
  const filters = ["all", "active", "inactive"];
  const isDarkTheme = theme === "dark";
  const [filter_prop, setFilterProp] = useState<string>("all");
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  const [toggleState, setToggleState] = useState([
    {
      logo: "/logo-devlens.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      logo: "/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      logo: "/logo-speed-boost.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      logo: "/logo-json-wizard.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      logo: "/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      logo: "/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      logo: "/logo-markup-notes.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      logo: "/logo-grid-guides.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      logo: "/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      logo: "/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      logo: "/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      logo: "/logo-console-plus.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ]);
  const handleFilterChange = (filter: string) => {
    setFilterProp(filter);
  };
  const AllActive = toggleState.filter((item) => item.isActive);
  const AllInActive = toggleState.filter((item) => !item.isActive);
  const updateActiveState = (nameOf: string, isActive: boolean) => {
    setToggleState(
      toggleState.map((item) => {
        if (item.name === nameOf) return { ...item, isActive: isActive };
        return item;
      })
    );
  };
  const deleteitemhandler = (nameOf: string) => {
    setToggleState(toggleState.filter((item) => item.name !== nameOf));
  };
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
          <div style={{ display: "flex", gap: 10 }}>
            {filters.map((item) => {
              return (
                <Btn
                  style={filter_prop === item ? { backgroundColor: "red" } : {}}
                  onClick={() => {
                    handleFilterChange(item);
                  }}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </Btn>
              );
            })}
          </div>
        </Extensions_list>
        <div style={{ margin: "50px" }}></div>
        <div className="card_wrapper">
          {filter_prop === "all" &&
            toggleState.map((item) => {
              return (
                <CardComp
                  deleteitemhandler={deleteitemhandler}
                  updateActiveState={updateActiveState}
                  description={item.description}
                  isActive={item.isActive}
                  logo={item.logo}
                  name={item.name}
                />
              );
            })}
          {filter_prop === "active" &&
            AllActive.map((item) => {
              return (
                <CardComp
                  deleteitemhandler={deleteitemhandler}
                  updateActiveState={updateActiveState}
                  description={item.description}
                  isActive={item.isActive}
                  logo={item.logo}
                  name={item.name}
                />
              );
            })}
          {filter_prop === "inactive" &&
            AllInActive.map((item) => {
              return (
                <CardComp
                  deleteitemhandler={deleteitemhandler}
                  updateActiveState={updateActiveState}
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
