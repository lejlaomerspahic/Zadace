//3.zadatak
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
  if(!res.ok){
      throw Error('ovo je error');
  }
  return res.json();
})
.then((data) => {
    data.forEach((user) => {
      let containerList = document.getElementById('containers');
        let card = document.createElement("div");
        card.classList.add("card");

          let image = document.createElement("img");
          image.src = "./image.png";
          card.appendChild(image);
  
          let userFullName = document.createElement("p");
          userFullName.innerHTML = "Name of the user: " + user.name;
          card.appendChild(userFullName);
    
          let userName = document.createElement("p");
          userName.innerHTML = "His username: " + user.username;
          card.appendChild(userName);
    
          let userCompany = document.createElement("p");
          userCompany.innerHTML = "Name of his company: " + user.company.name;
          card.appendChild(userCompany);
    
          containerList.appendChild(card);
    });
})
    .catch((error) => {
      alert(error);
    });
