<script setup>
import { ref } from "vue";
import { useTodoList } from "/src/composables/useTodoList.js";

const todo = ref("");
const isEdit = ref(false);
const { todoList, add, show, edit, del, check } = useTodoList();

const addTodo = () => {
  add(todo.value);
  todo.value = "";
};

const showTodo = (id) => {
  todo.value = show(id);
  isEdit.value = true;
};

const editTodo = () => {
  edit(todo.value);
  isEdit.value = false;
  todo.value = "";
};

const deleteTodo = (id) => {
  del(id);
};

const chengecheck = (id) => {
  var str1 = id + "1";
  var str2 = id + "2";
  var checkid = id + "checkflag";

  const btn1 = document.getElementById(str1);
  const btn2 = document.getElementById(str2);

  var input = document.getElementById(checkid);

  if (input.checked === true) {
    btn1.style.display = "none";
    btn2.style.display = "none";
  } else {
    btn1.style.display = "block";
    btn2.style.display = "block";
  }

  check(id);
};
</script>

<template>
  <div class="box_input">
    <input
      type="text"
      class="todo_input"
      v-model="todo"
      placeholder="Todoを入力"
    />
    <button class="btn green" @click="editTodo" v-if="isEdit">変更</button>
    <button class="btn" @click="addTodo" v-else>追加</button>
  </div>

  <div class="box_list">
    <div class="todo_list" v-for="todo in todoList" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          v-bind:id="todo.id + 'checkflag'"
          @change="chengecheck(todo.id)"
          :checked="todo.checked"
        />
        <label>{{ todo.task }}</label>
      </div>

      <div class="btns">
        <button
          v-bind:id="todo.id + '1'"
          class="btn green"
          @click="showTodo(todo.id)"
        >
          編集
        </button>
        <button
          v-bind:id="todo.id + '2'"
          class="btn pink"
          @click="deleteTodo(todo.id)"
        >
          削除
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}
.todo_input {
  width: 250px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  bottom: 1px solid #aaa;
  border-radius: 6px;
}

.btn {
  padding: 8px;
  background-color: #03a9f4;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.box_list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.todo_list {
  display: flex;
  align-items: center;
  gap: 8px;
}
.todo {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 12px;
  width: 300px;
}
.check {
  border: 1px solid red;
  transform: scale(1.6);
  margin: 0 16px 2px 6px;
}
.btns {
  display: flex;
  gap: 4px;
}
.green {
  background-color: #00c853;
}
.pink {
  background-color: #ff4001;
}
.fin {
  background-color: #ddd;
  color: #777;
}
.fin:after {
  content: "【完了】";
}
</style>
