import { brand } from "./brand.js";
import { logo } from "./logo.js";

export const wrapper=document.createElement("div");
wrapper.classList.add("candyGithubPage__topHeaderWrapper");
wrapper.append(logo,brand);
