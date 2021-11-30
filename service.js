/*function getImages(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`)/!*,{
       /!* success: function(data) {
            successCallBack(data)*!/
        }
    });*!/
    return promise;
}*/


function getImages (pageNumber){
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`)
    return promise.then((response)=>{
        return response.data;
    });
}















