const numbers = [5, 12, 8, 20, 3, 15];

numbers.forEach((numbers) => {
    console.log(numbers);
});

const aboveten = numbers.filter(numbers => numbers > 10) 
console.log(aboveten)
const two = numbers.map(numbers => numbers * 2)
console.log(two);
/////////////////////////////////
const user = {
    name: "Sultan",
    age: 17,
    city: "Bishkek",
    job: "Student"
};
function showUser(user) {
    console.log(user.name)
    console.log(user.age)
    console.log(user.city)
} 
showUser(user)

const {name, age} = user
console.log(name);
console.log(age);
////////////////////////////////
const title = document.querySelector("#title")
const button = document.querySelector("#btn")

button.addEventListener("click", () => {})