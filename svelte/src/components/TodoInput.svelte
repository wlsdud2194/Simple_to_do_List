
<script>
  import { todos, todoValue } from '~/store/todo.js';

  const handleInsert = () => {
    console.log($todoValue);
    if ($todoValue) {
      todos.insert($todoValue);
      todoValue.change('');
    } else {
      alert('내용을 입력해 주세요.');
    }
  };
const handleValueChange = (e) => {
    todoValue.change(e.target.value);
};
</script>

<style lang="scss">
  .todo-input {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
    
    &__input-wrap {
      flex: 1;
      display: flex;
      justify-content: center;

      & > input {
        outline: none;
        padding: 0.4rem;
        width: 90%;
        border: 0;
        border-bottom: 1px solid #cccccc;
        transition: all 0.3s ease-in-out;

        &:focus {
          border-bottom: 1px solid rgb(255, 62, 0);
        }
      }
    }

    &__btn {
      cursor: pointer;
      outline: none;
      background-color: #fff;
      padding: 0.4rem 1.2rem;
      color: rgb(255, 62, 0);
      border: 1px solid rgb(255, 62, 0);
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        font-weight: 700;
        color: #fff;
        background-color: rgb(255, 62, 0);
      }
    }
  }
</style>

<div class="todo-input">
  <div class="todo-input__input-wrap">
    <input type="text" value={$todoValue} on:change={handleValueChange} />
  </div>
  <div>
    <button class="todo-input__btn" on:click={handleInsert}>추가</button>
  </div>
</div>