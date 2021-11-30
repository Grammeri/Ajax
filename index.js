console.log(0)

$.ajax('https://repetitora.net/api/JS/Images',{
    success: function(data){
        data.forEach(el =>{
            const img = document.createElement("img");
            img.src=el.thumbnail;
            document.querySelector("body").appendChild(img);
        })
    }
});

console.log(1);








/*
const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);

function makeRequest(){
    resultBlock.innerHTML = "result";
}*/
