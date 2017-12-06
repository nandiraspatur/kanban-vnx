<template>
  <div class="ui small feed">
    <div class="event">
      <div class="content">
        <div class="ui segment">
          <div class="ui header">
            {{task.title}}
          </div>
          <div class="ui divider"></div>
          <div class="description">
            Point: {{task.point}} <br>
            Asigned To: {{task.asigned_to}}
          </div>
          <br>
          <div class="ui blue button">Show Detail</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
export default {
  props: ['task']
}
</script>

<style>

</style>
