<template>
  <div class="ui yellow card">
    <div class="content">
      <div class="header">ToDo</div>
    </div>
    <div class="content">
      <TodoList v-for="task in tasks" key="task.id" v-if="task.status == 'todo'" :task="task"/>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
import TodoList from '@/components/TodoList'
export default {
  components: {
    TodoList
  },
  firebase: {
    tasks: kanbanref
  }
}
</script>

<style>

</style>
