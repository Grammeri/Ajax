const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", ()=>{
    const promise = getImages(pageNumberEl.value/*, onDataReceipt*/);
    promise.then(onDataReceipt);
});

function onDataReceipt (array){
    array.forEach(el =>{
        const img = document.createElement("img");
        img.src=el.thumbnail;
        document.querySelector("#result").appendChild(img);
    });
}















