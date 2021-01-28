
document.getElementById('oblicz').addEventListener('click', function() {

    let wyplata = document.getElementsByClassName('wyplata');
    let czas = document.getElementsByClassName('czas');
    let stawka = document.getElementsByClassName('stawka');
    let pracownik = document.querySelectorAll('.pracownik');
    let podwyzka = 0;
    let emploeesArray = [];


    for(i = 0; i < czas.length && i < wyplata.length && i < stawka.length && i < pracownik.length; i++) {

        emploeesArray.push({
            name: pracownik[i].innerText,
            workTime: parseFloat(czas[i].value)
        });

        if(czas[i].value > 160) {
            
            podwyzka = (czas[i].value- 160)*stawka[i].value*2;
            wyplata[i].innerText = (czas[i].value * stawka[i].value)+podwyzka;

        } else {
            wyplata[i].innerText = czas[i].value * stawka[i].value;
        }

        // if(czas[i].value < 100) {
        //     pracownik[i].classList.add('red');

        // } else {

        //     pracownik[i].classList.add('green');

        // }
        
        (czas[i].value < 100) ? pracownik[i].classList.add('red') : -1
    }
    
    emploeesArray.sort((a, b) => (a.workTime < b.workTime) ? 1 : -1)

    // document.getElementById('najlepsi-pracownicy').innerText = `${emploeesArray[1].name}, ${emploeesArray[2].name}, ${emploeesArray[3].name}`
    
    let ulList = document.createElement('ul');
    document.getElementById('najlepsi-pracownicy').appendChild(ulList);
    let liOne = document.createElement('li');
    liOne.innerText = `${emploeesArray[1].name}`;
    ulList.appendChild(liOne);

    let liTwo = document.createElement('li');
    liTwo.innerText = `${emploeesArray[2].name}`;
    ulList.appendChild(liTwo);

    let liThree = document.createElement('li');
    liThree.innerText = `${emploeesArray[3].name}`;
    ulList.appendChild(liThree);
    
})

