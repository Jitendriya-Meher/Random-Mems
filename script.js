
const meme = document.getElementById("meme");
const btn = document.getElementById("btn");
const title = document.getElementById("title");

const url = "https://meme-api.com/gimme";

async function getMeme(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        meme.src = data.url;
        title.innerText = data.title;
    }
    catch(err){

    }
}

getMeme();

btn.addEventListener("click",getMeme);