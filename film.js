let xhr = new XMLHttpRequest(); 
xhr.open("GET", "film.json", true);
xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        console.log(data)
        
        data.forEach(element => {
            let tr = document.createElement("tr");
        let poster= document.createElement("img");
        let title = document.createElement("td");
        let RDate = document.createElement("td");
        let director = document.createElement("td")
        let lasts = document.createElement("td"); 
        let festival = document.createElement("td");
        let actor = document.createElement("td")
        poster.append(element.poster);
        title.append(element.title);
        RDate.append(element.RDate);
        director.append(element.director)
        lasts.append(element.lasts);
        festival.append(element.festival);
        actor.append(element.actor);
        poster.setAttribute("src",element.poster)
        poster.style.width = "100px"              
        tr.appendChild(poster);
        tr.appendChild(title);
        tr.appendChild(RDate);
        tr.appendChild(director)
        tr.appendChild(lasts);
        tr.appendChild(festival);
        tr.appendChild(actor);
    
        document.querySelector('#tbody').appendChild(tr)
    });
};
xhr.send();


