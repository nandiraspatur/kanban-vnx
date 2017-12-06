<template>
  <div class="ui green card">
    <div class="content">
      <div class="header">Doing</div>
    </div>
    <div class="content">
      <DoingList v-for="task in tasks" key="task.id" v-if="task.status == 'doing'" :task="task"/>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
import DoingList from '@/components/DoingList'
export default {
  components: {
    DoingList
  },
  firebase: {
    tasks: kanbanref
  }
}
</script>

<style>

</style>
