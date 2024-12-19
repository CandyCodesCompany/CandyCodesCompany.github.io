import { text } from "./text.js";
import { video } from "./video.js";

export const wrapper=document.createElement("div")
wrapper.classList.add("candyGithubPage__bannerWrapper");
wrapper.append(video,text)