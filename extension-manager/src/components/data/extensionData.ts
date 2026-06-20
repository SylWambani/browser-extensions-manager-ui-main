// extensions.ts

import devlens from "../../assets/images/logo-devlens.svg";
import styleSpy from "../../assets/images/logo-style-spy.svg";
import speedboost from "../../assets/images/logo-speed-boost.svg";
import jsonwizard from "../../assets/images/logo-json-wizard.svg";
import tabmasterpro from "../../assets/images/logo-tab-master-pro.svg";
import viewportbuddy from "../../assets/images/logo-viewport-buddy.svg";
import markupnotes from "../../assets/images/logo-markup-notes.svg";
import gridguides from "../../assets/images/logo-grid-guides.svg";
import palettepicker from "../../assets/images/logo-palette-picker.svg";
import linkchecker from "../../assets/images/logo-link-checker.svg";
import domsnapshot from "../../assets/images/logo-dom-snapshot.svg";
import consoleplus from "../../assets/images/logo-console-plus.svg";

export const extensions = [
  {
    id: 1,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    logo: devlens,
    active: true,
  },
  {
    id: 2,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    logo: styleSpy,
    active: true,
  },
  {
    id: 3,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    logo: speedboost,
    active: false,
  },
  {
    id: 4,
    name: "JSONWizard",
    description: "Simplify JSON data manipulation with powerful editing tools.",
    logo: jsonwizard,
    active: true,
  },
  {
    id: 5,
    name: "TabMasterPro",
    description: "Advanced tab management with intuitive controls.",
    logo: tabmasterpro,
    active: true,
  },
  {
    id: 6,
    name: "ViewportBuddy",
    description: "Easily test your design across different screen sizes.",
    logo: viewportbuddy,
    active: false,
  },
  {
    id: 7,
    name: "MarkupNotes",
    description: "Take quick notes and annotations directly on any webpage.",
    logo: markupnotes,
    active: true,
  },
  {
    id: 8,
    name: "GridGuides",
    description: "Visualize and align elements with precise grid guides.",
    logo: gridguides,
    active: false,
  },
  {
    id: 9,
    name: "PalettePicker",
    description: "Easily pick and customize colors for your designs.",
    logo: palettepicker,
    active: true,
  },
  {
    id: 10,
    name: "LinkChecker",
    description: "Quickly check for broken links on any webpage.",
    logo: linkchecker,
    active: true,
  },
  {
    id: 11,
    name: "DOMSnapshot",
    description: "Capture and analyze the DOM structure of any webpage.",
    logo: domsnapshot,
    active: false,
  },
  {
    id: 12,
    name: "ConsolePlus",
    description: "Enhance your browser console with advanced debugging tools.",
    logo: consoleplus,
    active: true,
  },
];
