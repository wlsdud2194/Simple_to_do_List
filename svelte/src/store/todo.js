import { writable } from 'svelte/store';

let todoId = 0;

export const todoValue = (function() {
  const { subscribe, set } = writable('');

  return {
    subscribe,
    change: (value) => set(value),
  };
})();

export const todos = (function() {
  const { subscribe, update } = writable([]);
  
  return {
    subscribe,
    insert: (content) => {
      update((data) => {
        const newTodo = {
          id: todoId++,
          content,
          done: false,
        };

        return [...data, newTodo];
      });
    },
    toggleDone: (id) => {
      update((data) => {
        const list = [...data];
        const idx = list.findIndex(item => item.id === id);
        list[idx].done = !list[idx].done;

        return list;
      });
    },
    remove: (id) => {
      update((data) => {
        const list = data.filter(item => item.id !== id);

        return list;
      });
    },
  }
})();
