//1. zadatak
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(!res.ok){
            throw Error('ovo je error');
        }
        return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

//2.zadatak
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(!res.ok){
            throw Error('ovo je error');
        }
        return res.json();
    })
    .then(data => {
        const userList = document.getElementById('user-list');
        let user = '';

        data.forEach(element => {
            user += `<li> <p>${element.name}</p> <p>${element.username}</p> <p>${element.company.name}</p></li>`
        });

        userList.innerHTML = user;
    })
    .catch(err => {
        console.log(err);
    })


    