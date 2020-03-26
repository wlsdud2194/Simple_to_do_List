<script>
  import { todos } from '../store/todo.js';
  import TodoItem from './TodoItem.svelte';

</script>

<style lang="scss">
  .todo-content {
    min-height: 15rem;
    padding: 0 1.5rem;
  }

  .empty-view {
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
      font-size: 1.1rem;
      font-weight: 700;
      color: #cccccc;
    }
  }
</style>

<div>
  <div class="todo-content">
    {#if $todos.length > 0 }
      {#each $todos as todo}
        <TodoItem
          {...todo}
          onToggle={() => todos.toggleDone(todo.id)}
          onRemove={() => todos.remove(todo.id)}
        />
      {/each}
    {:else}
      <div class="empty-view">
        <span>Todo is Empty! (ツ)_/¯</span>
      </div>
    {/if}
  </div>
</div>