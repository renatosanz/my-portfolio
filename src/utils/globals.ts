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
    year: 2024,
    url: "https://riprtx.netlify.app/",
    bgColor: "#281a15",
    fontColor: "#fefefe",
    title: "riprtx",
    icon: "https://img.icons8.com/?size=100&id=18911&format=png&color=000000",
    repository: "https://github.com/renatosanz/riprtx",
  },

  {
    year: 2024,
    url: "https://intervisor.netlify.app/",
    bgColor: "#427b58",
    fontColor: "#fefefe",
    title: "InterVisor",
    icon: "https://img.icons8.com/?size=100&id=64353&format=png&color=000000",
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
    bgColor: "#b57614",
    fontColor: "#fefefe",
    title: "typo",
    icon: "https://img.icons8.com/?size=100&id=8WgpFCLqcMzv&format=png&color=000000",
    repository: "https://github.com/renatosanz/typo",
  },
  {
    year: 2022,
    url: "https://calc-renato.netlify.app",
    bgColor: "#d68100",
    fontColor: "#1E1E1E",
    title: "Calc",
    icon: "https://raw.githubusercontent.com/renatosanz/Calc/df5b4bd8c66ec0b7632f78480cc1fc4ca4239548/src/images/icon.svg",
    repository: "https://github.com/renatosanz/Calc",
  },
];
