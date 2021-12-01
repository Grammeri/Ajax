const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

clickMeButton.addEventListener("click", ()=>{
    const promise = getImages(pageNumberEl.value/*, onDataReceipt*/);
    promise.then(onImagesReceipt);
});

getTasksButton.addEventListener("click", ()=>{
    const promise = getTasks();
    promise.then(onTasksReceipt);
});

createTask("learn JS").then((data)=>{

    console.log(data)
})

function onTasksReceipt (tasks){
    tasks.forEach(task =>{
        const li = document.createElement("li");
        li.innerHTML = task.title;
        document.querySelector("#tasks-result").appendChild(li);
    });
}

function onImagesReceipt (array){
    array.forEach(el =>{
        const img = document.createElement("img");
        img.src=el.thumbnail;
        document.querySelector("#result").appendChild(img);
    });
}













