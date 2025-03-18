let todos = localStorage.getItem('todos');
if (!todos) {
    todos = []
} else {
    todos = JSON.parse(todos);
}

let darkMode = true;

const title = document.querySelector('#title');
const desc = document.querySelector('#desc');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title.value)
    if (title.value.length == 0) {
        return alert('title cannot be empty!')
    }
    if (desc.value.length == 0) {
        return alert('description cannot be empty!');
    }
    todos.push({
        id:Math.random(),
        title: title.value,
        desc: desc.value,
    })
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('todo added!');
    title.value = '';
    desc.value = '';
}

const mode = document.querySelector('#mode');
const navbar = document.querySelector('#navbar');
const main = document.querySelector('#main');
const form= document.querySelector('#form');

const handleMode = () => {
    if (darkMode) {
        document.body.classList.remove('dark');
        main.classList.remove('dark');
        navbar.classList.remove('dark');
        form.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
        main.classList.add('dark');
        navbar.classList.add('dark');
        form.classList.add('dark');
    }
    darkMode = !darkMode;
}
mode.addEventListener('click',handleMode);


const logo = document.querySelector('#logo');
const text = "Productify"

text.split('').forEach((char,index)=>{
    setTimeout(()=>{
      logo.innerHTML+=logo.innerHTML=char 
    },500+index*100)
})