let todos = localStorage.getItem('todos');
if(!todos){
    todos=[];
}else{
    todos=JSON.parse(todos);
}
let darkMode = true;

const noTodos = document.querySelector('.noTodos');
if(todos.length!=0) noTodos.innerHTML=""
const main = document.querySelector('#main');

todos.forEach(todo => {
    const box = document.createElement('div');
    box.classList.add('box');

    const title = document.createElement('h3');
    title.innerHTML = todo.title;
    box.appendChild(title);

    const desc = document.createElement('p');
    desc.innerHTML = todo.desc;

    const time = document.createElement('p');
    time.innerHTML = `<span>${new Date(todo.time).toLocaleTimeString()}, ${new Date(todo.time).toDateString()}</span>`

    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete');
    deleteSpan.innerHTML="delete"
    deleteSpan.addEventListener('click',()=>{
        todos=todos.filter(item=>item.id!=todo.id);
        localStorage.setItem('todos',JSON.stringify(todos));
        window.location.reload();
    })
    box.appendChild(deleteSpan);

    if(darkMode) box.classList.add('dark');
    box.appendChild(desc);
    box.appendChild(time);
    main.appendChild(box);
});


const mode = document.querySelector('#mode');
const navbar = document.querySelector('#navbar');
const boxes = document.querySelectorAll(".box");

const handleMode = () => {
    console.log("wjhie")
    if (darkMode) {
        document.body.classList.remove('dark');
        main.classList.remove('dark');
        navbar.classList.remove('dark');
        boxes.forEach(box=>{
            box.classList.remove('dark');
        })
    } else {
        document.body.classList.add('dark');
        main.classList.add('dark');
        navbar.classList.add('dark');
        boxes.forEach(box=>{
            box.classList.add('dark');
        })
    }
    darkMode = !darkMode;
}
mode.addEventListener('click',handleMode);