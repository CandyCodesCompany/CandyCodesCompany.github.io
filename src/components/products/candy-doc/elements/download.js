export const download=document.createElement("div");

download.classList.add("candyGithubPage__productDownload")

download.innerHTML=/*html*/
`

<h3>
Take your document editing to the next level.
</h3>
<button  class="downloadButton">DOWNLOAD</button>
<h3>
New to Candy Doc? Start here.
</h3>
<button class="documentButton">DOCUMENT</button>
`

download.addEventListener("mousedown",(e)=>{
    if(e.target.classList.contains("downloadButton"))
    {
        location.href="https://github.com/CandyCodesCompany/candy-doc-js/releases/download/v0.0.0-beta/Candy-Doc.zip"
    }
})