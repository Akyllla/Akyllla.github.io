// Находим нужные элементы на странице
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Функция добавления новой задачи
function addTask() {
    const taskText = taskInput.value.trim();

    // Проверяем, чтобы поле не было пустым
    if (taskText === '') {
        alert('Пожалуйста, введите текст задачи!');
        return;
    }

    // Создаем элемент списка (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Создаем кнопку удаления для этой задачи
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');

    // При клике на крестик — удаляем элемент li
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Добавляем кнопку удаления внутрь li
    li.appendChild(deleteBtn);

    // Добавляем готовый li в общий список задач (ul)
    taskList.appendChild(li);

    // Очищаем поле ввода
    taskInput.value = '';
}

// Добавляем задачу по клику на кнопку
addTaskBtn.addEventListener('click', addTask);

// Добавляем задачу по нажатию клавиши "Enter" в поле ввода
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
