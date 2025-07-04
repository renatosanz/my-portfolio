export interface ProjectI {
  year: number;
  url?: string;
  bgColor: string;
  fontColor: string;
  title: string;
  icon?: string;
  repository: string;
}

export const myProjects: Array<ProjectI> = [
  {
    year: 2025,
    bgColor: "#A75D5D",
    fontColor: "#FFC3A1",
    title: "prettygraphs",
    icon: "https://img.icons8.com/?size=100&id=Ltfxm4SXHimR&format=png&color=FFC3A1",
    repository: "https://github.com/renatosanz/prettygraphs",
  },
  {
    year: 2025,
    bgColor: "#D2D0A0",
    fontColor: "#537D5D",
    title: "dec2bin",
    icon: "https://img.icons8.com/?size=100&id=39089&format=png&color=537D5D",
    repository: "https://github.com/renatosanz/dec2bin",
  },
  {
    year: 2025,
    bgColor: "#282828",
    fontColor: "#ebdbb2",
    title: "ascii-parser",
    icon: "https://img.icons8.com/?size=100&id=TUlXgsYn8qIJ&format=png&color=ebdbb2",
    repository: "https://github.com/renatosanz/ascii-parser",
  },
  {
    year: 2024,
    url: "https://riprtx.netlify.app/",
    bgColor: "#FE5D26",
    fontColor: "#FAEDCA",
    title: "riprtx",
    icon: "https://img.icons8.com/?size=100&id=18900&format=png&color=FAEDCA",
    repository: "https://github.com/renatosanz/riprtx",
  },

  {
    year: 2024,
    url: "https://intervisor.netlify.app/",
    bgColor: "#2D4F2B",
    fontColor: "#FFB823",
    title: "InterVisor",
    icon: "https://img.icons8.com/?size=100&id=8667&format=png&color=FFB823",
    repository: "https://github.com/renatosanz/InterVisor",
  },

  {
    year: 2024,
    bgColor: "#8f3f71",
    fontColor: "#fefefe",
    title: "textAnalyzer",
    repository: "https://github.com/renatosanz/analizadorTextos",
  },

  {
    year: 2021,
    bgColor: "#4F6F52",
    fontColor: "#D2DE32",
    title: "typo",
    icon: "https://img.icons8.com/?size=100&id=10333&format=png&color=D2DE32",
    repository: "https://github.com/renatosanz/typo",
  },
  {
    year: 2022,
    url: "https://calc-renato.netlify.app",
    bgColor: "#A4B465",
    fontColor: "#FAF1E6",
    title: "Calc",
    icon: "https://img.icons8.com/?size=100&id=2PpPoZLTkXox&format=png&color=FAF1E6",
    repository: "https://github.com/renatosanz/Calc",
  },
];
