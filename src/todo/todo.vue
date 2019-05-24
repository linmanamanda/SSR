<template>
  <section class="rel-app">
    <input 
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下来打算做什么? "
        @keyup.enter="addTodo"
    >
    <Item 
        v-for="todo in filterTodo" 
        :todo="todo" 
        :key="todo.id" 
        @delete="deleteTodo"
    />
    <Tabs 
      :todos="todos" 
      :filter="filter"
      @toggle="toggleTabs"
      @clearAll="clearAll"
    />
  </section>
</template>
<script>
import Item from './item.vue';
import Tabs from './tabs.vue'


let id = 0;
export default {
    components: {
        Item,
        Tabs,
    },
    data() {
        return {
            todos: [],
            filter: 'all',
        }
    },
    computed: {
      filterTodo() {
        if (this.filter === 'all') {
          return this.todos
        } else {
          const isCompleted = this.filter === 'completed' ? true : false;
          return this.todos.filter(todo => { return todo.completed === isCompleted });
        }
      },
    },
    methods: {
        addTodo(e) {
            let value = e.target.value.trim();

            if (value) {
                this.todos.unshift({
                    content: value,
                    completed: false,
                    id: id++,
                });

                e.target.value = '';
            }
        },
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
        },
        toggleTabs(state) {
          this.filter = state;
        },
        clearAll() {
          this.todos = this.todos.filter(todo => { return !todo.completed });
        },
    },
}
</script>
<style lang="stylus" scoped>
.rel-app
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
.add-input
  position relative
  width 100%
  font-size 24px
  font-family inherit 
  font-weight inherit 
  line-height 1.4em
  outline none 
  color inherit 
  padding 6px
  border 1px solid #999
  box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, .5)
  box-sizing border-box
  padding 16px 16px 16px 60px
  margin-bottom 16px
</style>


