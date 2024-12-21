import { image } from "./image.js";
import { text } from "./text.js";

export const wrapper=document.createElement("div")
wrapper.classList.add("candyGithubPage__bannerWrapper");
wrapper.append(text,image)