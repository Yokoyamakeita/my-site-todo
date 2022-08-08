import { ref } from "vue";

export const useTodoList = () =>{
    const ls = localStorage.todoList;
    const todoList = ref([]);
    todoList.value = ls ? JSON.parse(ls) : [];



    const findbyid = (id) => {
        return todoList.value.find((todo) => todo.id ===id);
    };

    const findIndexByid = (id) => {
        return todoList.value.findIndex((todo) => todo.id === id);
    };
    const add = (task) =>{
        const id = new Date().getTime();
        todoList.value.push({ id: id, task: task , checked:false});

        localStorage.todoList = JSON.stringify(todoList.value);
    }

    const editId = ref(-1);

    const show = (id) =>{
        const todo = findbyid(id);
        editId.value = id;
        return todo.task;
    };

    const edit = (task) => {
        const todo = findbyid(editId.value);
        const idx = findIndexByid(editId.value);

        todo.task = task;

        todoList.value.splice(idx, 1, todo);

        localStorage.todoList = JSON.stringify(todoList.value);

        editId.value = -1;
    };

    const del = (id) => {
        const todo = findbyid(id);
        const delMsg = "「" + todo.task + "」を削除しますか？";

        if (!confirm(delMsg)) return;

        const idx = findIndexByid(id);
        todoList.value.splice(idx, 1);
        localStorage.todoList = JSON.stringify(todoList.value);
    };

    const check = (id) => {
        const todo = findbyid(id);
        const idx = findIndexByid(id);

        todo.checked = !todo.checked;
        todoList.value.splice(idx, 1, todo);
        localStorage.todoList = JSON.stringify(todoList.value);
    };

    return {todoList,add,show,edit,del,check};

};

