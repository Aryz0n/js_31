let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let studentTabel = document.getElementById("studentTabel");

function success() {
    let studenten = JSON.parse(this.responseText);
    console.log(studenten);

    // Hier jouw code om alle studenten uit te lezen en aan de table toe te voegen
    for(let i=0; i<studenten.length; i++) { 
        let tr1 = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText += studenten[i].studentNaam + "\n"; 
        output2.appendChild(tr1);
        tr1.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText += studenten[i].studentNummer + "\n";
        tr1.appendChild(td2);
    } 

}

function error(err) {
    console.error('Error Occurred :', err);
}

function getStudent(){
    let xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'jsonRead.php', true);
    xhr.send();
}

// Haal initieel al de studenten op die in de database staan
getStudent();

