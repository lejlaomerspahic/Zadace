//1.zadatak
let cars = ['Ferrari', 'BMW', 'Volvo', 'Mini', 'BMW'];
let cars1;
const logArray = array => {
    array.forEach(element => {
        document.write(element+' ');
    });
}

document.write('Pravi niz: ');
logArray(cars);
cars1 = [...cars];
document.write('</br>');
document.write('Klonirani niz: ');
logArray(cars1);
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');

//2.zadatak
let uniqueChars = [...new Set(cars)];
document.write(uniqueChars);
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');

//3. zadatak
const array1 = [1, 5, 7];
const array2 = [7, 8, 9]
function getUniqueAfterMerge(arr1, arr2){
    let arr = [...arr1, ...arr2];
    let uniqueArr = [...new Set(arr)];
    document.write(uniqueArr);
}
getUniqueAfterMerge(array1, array2);
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');

//4.zadatak
var numbers = [1,4,5,8,21,33];
var evenNumbers = numbers.filter(function(item) {
   return (item % 2 == 0);
});

document.write(evenNumbers);
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');

//5.zadatak
const arr = [1, 2, 3, 10, 0]
var sum = 0;
arr.forEach(element => {
    sum += element;
});

document.write('Suma je ' + sum);
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');

//6.zadatak
let countries = [
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        population: 3281000,
        currency: 'BAM',
        languages: [
            'Bosnian',
            'Croatian',
            'Serbian'
        ]
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        population: 4047000,
        currency: 'HRK',
        languages: [
            'Croatian',
            'Serbian',
            'Italian',
            'Hungarian',
            'Czech'
        ]
    },
    {
        name: 'Serbia',
        capital: 'Beograd',
        population: 6908000,
        currency: 'RSD',
        languages: [
            'Serbian',
            'Albanian',
            'Bosnian',
            'Bulgarian',
            'Hungarian'
        ]
    }];

//7.zadatak
let maxObj = countries.reduce((max, obj) => (max.population > obj.population) ? max : obj);
console.log(maxObj);

//8.zadatak
let country = countries.find(country => country.population > 5000000);
console.log(country);

//9.zadatak
countries.forEach(item => {
    document.write(item.capital+' ');
});

//10.zadatak
const capitalsStatringWithZ = countries.filter(item => {
    if(item.capital.startsWith('Z')){
        return true;
    }
    return false;
    });
document.write('</br>');
document.write('-----------------------------------------------------------------------');
document.write('</br>');
document.write('Gradovi koji pocinju sa Z: ')
capitalsStatringWithZ.forEach(item => {
document.write(item.capital);
});


