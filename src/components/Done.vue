<template>
  <div class="ui blue card">
    <div class="content">
      <div class="header">Done</div>
    </div>
    <div class="content">
      <DoneList v-for="task in tasks" key="task.id" v-if="task.status == 'done'" :task="task"/>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
import DoneList from '@/components/DoneList'
export default {
  components: {
    DoneList
  },
  firebase: {
    tasks: kanbanref
  }
}
</script>

<style>

</style>
