let xhr = new XMLHttpRequest(); 
xhr.open("GET", "film.json", true);
xhr.onload = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(JSON.parse(this.responseText));
        }

};
xhr.send();