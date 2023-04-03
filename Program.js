//datamenukarakter
currentname = localStorage.getItem('name');
currentchar = document.getElementById('currentChar');
choice = localStorage.getItem('choose');
document.getElementById('currentname').innerHTML = currentname;
choice = localStorage.getItem('choose');
if(choice == 0){
    currentchar.setAttribute("src", "Gambar/Idle.png");
}else{
    currentchar.setAttribute("src", "Gambar/IdleSwag.png");
}
//datamenukarakter



//Waktu
if(localStorage.getItem('i') == null){
    i = localStorage.setItem('i', 0);

}else{
    i = localStorage.getItem('i');
}
function increment(){
    temp = 0;
    i++;
    temp = i%60;
    temp2 = (i - temp)/60;
    document.getElementById('time').innerHTML = "";
    if(temp2 < 10)document.getElementById('time').innerHTML += 0;

    document.getElementById('time').innerHTML += temp2;
    document.getElementById('time').innerHTML += ":";
    if(temp < 10)document.getElementById('time').innerHTML += 0;
    document.getElementById('time').innerHTML += (temp);

    if(temp2 >= 24)i = 0;
    localStorage.setItem('i', i);

    if (temp2 < 6){
        document.getElementById('state').innerHTML = "Night....";
        document.body.style.backgroundColor = "grey";
    }
    else if(temp2 < 11){
        document.getElementById('state').innerHTML = "Morning";
        document.body.style.backgroundColor = "orange";
    }
    else if(temp2 < 14){
        document.getElementById('state').innerHTML = "Day"
        document.body.style.backgroundColor = "yellow";
    }
    else if(temp2 < 17){
        document.getElementById('state').innerHTML = "Afternoon";
        document.body.style.backgroundColor = "grey";
    }
    else if(temp2 < 23){
        document.getElementById('state').innerHTML = "Evening";
        document.body.style.backgroundColor = "grey";
    }
    else if(temp2 < 25){
        document.getElementById('state').innerHTML = "Night..";
        document.body.style.backgroundColor = "black";
    }
}


setInterval(increment, 1000);
//Waktu

//bermain
playButton = document.getElementById('playButton');
playButton.addEventListener("click", toPlayMenu);

function toPlayMenu(){
location.href ="Menu Bermain.html"
}
//bermain


