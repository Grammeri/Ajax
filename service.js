function getImages(pageNumber, successCallBack){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`,{
        success: function(data) {
            successCallBack(data)
        }
    });
}















