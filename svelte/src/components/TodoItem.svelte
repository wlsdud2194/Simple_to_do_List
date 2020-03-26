
<script>
  export let content;
  export let done;
  export let onToggle;
  export let onRemove;

  const onRemoveItem = (e) => {
    e.stopPropagation();
    onRemove();
  }
</script>

<style lang="scss">
  .todo-item {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem;

    &:nth-child(2n) {
      background-color: #e6e6e6;
    }

    &__content {
      flex: 1;
      padding: 0 0.4rem;
    }

    &__remove-btn {
      font-size: 0.8rem;
      cursor: pointer;
      color: tomato;

      &:hover {
        text-decoration: line-through;
      }
    }
  }

  .done {
    text-decoration: line-through;
  }
</style>

<div class="todo-item" on:click={onToggle}>
  <div class={`todo-item__content ${done ? 'done':''}`}>
    {content}
  </div>

  <div>
    <span class="todo-item__remove-btn" on:click={onRemoveItem}>[지우기]</span>
  </div>
</div>