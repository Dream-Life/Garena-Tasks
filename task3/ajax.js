function ajax(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.responseType = 'json'
    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.response)
        }else{
            console.log(new Error(this.statusText))
        }
    }
    xhr.send()
}

ajax('data.json')
