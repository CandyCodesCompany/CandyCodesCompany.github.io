import { download } from "./download.js";
import { features } from "./features.js";
import { image } from "./image.js";
import { text } from "./text.js";

export const wrapper=document.createElement("div");
wrapper.classList.add("candyGithubPage__productWrapper")
wrapper.append(image,text,features,download)