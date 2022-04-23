//1.zadatak
$(document).ready(() => {
$('form').submit((event)=> {
    let name=$('#name').val();
    let job=$('#job').val();
    console.log(name,job)
})
});

//2.zadatak
const clicked=()=>{
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "morpheus",
        job: "leader"
    })
    })
    .then(res => {
        if(!res.ok){
            throw Error('ovo je error');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
})
}