const a = document.querySelectorAll("#box ul li");

a.forEach(item => {
  item.onclick = () => {
    item.classList.toggle("bg-red-500");
  }
});


const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const stats = document.getElementById('stats');
    const clearCompleted = document.getElementById('clearCompleted');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let todos = [];
    let currentFilter = 'all';

    // Tambah todo
    function addTodo() {
      const text = todoInput.value.trim();
      if (text === '') {
        alert('Tugas tidak boleh kosong!');
        return;
      }

      const todo = {
        id: Date.now(),
        text: text,
        completed: false
      };

      todos.push(todo);
      todoInput.value = '';
      renderTodos();
    }

    // Render todos
    function renderTodos() {
      todoList.innerHTML = '';

      let filteredTodos = todos;
      if (currentFilter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
      } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
      }

      filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition ${todo.completed ? 'opacity-60' : ''}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.className = 'w-5 h-5 cursor-pointer';
        checkbox.onchange = () => toggleTodo(todo.id);
        
        const span = document.createElement('span');
        span.className = `flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`;
        span.textContent = todo.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'text-red-500 hover:text-red-700 font-bold text-xl';
        deleteBtn.textContent = '×';
        deleteBtn.onclick = () => deleteTodo(todo.id);
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
      });

      updateStats();
    }

    // Toggle completed
    function toggleTodo(id) {
      const todo = todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
      }
    }

    // Delete todo
    function deleteTodo(id) {
      todos = todos.filter(t => t.id !== id);
      renderTodos();
    }

    // Update stats
    function updateStats() {
      const activeTodos = todos.filter(t => !t.completed).length;
      stats.textContent = `${activeTodos} tugas tersisa`;
    }

    // Clear completed
    clearCompleted.addEventListener('click', () => {
      todos = todos.filter(t => !t.completed);
      renderTodos();
    });

    // Filter
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.className = 'filter-btn px-4 py-2 rounded-lg text-sm font-medium transition bg-gray-100 text-gray-600 hover:bg-gray-200';
        });
        btn.className = 'filter-btn px-4 py-2 rounded-lg text-sm font-medium transition bg-indigo-500 text-white';
        currentFilter = btn.dataset.filter;
        renderTodos();
      });
    });

    // Event listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });

    // Initial render
    renderTodos();