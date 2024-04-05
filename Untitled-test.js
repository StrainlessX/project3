document.addEventListener("DOMContentLoaded", function() {
    const optionsForm = document.getElementById("optionsForm");
    const todoList = document.getElementById("todoList");
    const addTodoBtn = document.getElementById("addTodo");
    const openNewPageBtn = document.getElementById("openNewPage");
    
    addTodoBtn.addEventListener("click", function() {
        const selectedOption = optionsForm.elements["todo"].value;
        if (selectedOption) {
            if (todoList.children.length < 10) {
                const newItem = document.createElement("li");
                newItem.textContent = selectedOption;
                todoList.appendChild(newItem);
                
                if (todoList.children.length == 10) {
                    addTodoBtn.disabled = true;
                    openNewPageBtn.disabled = false;
                }
            }
        }

        openNewPageBtn.addEventListener("click", function() {
            window.location.href = "result_page.html";
        });

    });
});
