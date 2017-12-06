<template>
  <div class="ui red card">
    <div class="content">
      <div class="header">Backlog</div>
    </div>
    <div class="content">
      <BacklogList v-for="task in tasks" key="task.id" v-if="task.status == 'backlog'" :task="task"/>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
import BacklogList from '@/components/BacklogList'
export default {
  components: {
    BacklogList
  },
  firebase: {
    tasks: kanbanref
  }
}
</script>

<style>

</style>
