var img = document.querySelector("body");
fetch("https://api.thecatapi.com/v1/images/search")
    .then(raw=>raw.json())
    .then(obj=>{
        //console.log();
        // img.setAttribute("src", obj[0]['url']);
        img.style.backgroundImage = `url(${obj[0]['url']})`;
    })