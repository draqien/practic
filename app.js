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

button.addEventListener("click", () => {
    title.textContent = "Я изучаю JavaScript!"
})
title.style.color = "brown"
/////////////////////////////////
const users = []
const input = document.querySelector("#name")
const age1 = document.querySelector("#age")
const button1 = document.querySelector("#addBtn")
const list = document.querySelector("#list")

button1.addEventListener("click", () => {
    const username = input.value.trim();
    const userage = age1.value.trim();
    if (username === '' || userage === '') {
        return
    }

    const newUser = {
        name: username,
        age: Number(userage)
    }

    users.push(newUser)

    list.innerHTML = users
    .map(user => `<li>${user.name} - ${user.age}</li>`)
    .join('')
})
////////////////////////////////////
const user1 = {
    name: "Sultan",
    age: 17
}

localStorage.setItem('user1', JSON.stringify(user1))
const rawData = localStorage.getItem('user1')
if (rawData) {
  const user1 = JSON.parse(rawData);
  console.log('Найден пользователь:', user1.name, user1.age);
} else {
  console.log('Пользователь не найден')
}