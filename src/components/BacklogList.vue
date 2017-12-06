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
          <div class="ui red button" @click="showModalDetail">Show Detail</div>
        </div>
      </div>
    </div>
    <div :class="modalClass">
      <i class="close icon"></i>
      <div class="header">
        Task Detail <b>{{task.title}} for {{task.asigned_to}}</b>
      </div>
      <div class="content">
        <div class="field">
          <h4>Task Description:</h4>
          {{task.desc}}
        </div>
        <div class="field">
          <h4>Point:</h4>
          {{task.point}}
        </div>
        <div class="field">
          <h4>Status</h4>
          {{task.status}}
        </div>
      </div>
      <div class="actions task">
        <div class="ui negative deny button delete" @click="deleteTask(task['.key'])">
          Delete
        </div>
        <div class="ui positive right labeled icon button" @click="nextStep(task['.key'])">
          Todo
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
export default {
  props: ['task'],
  data () {
    return {
      modalClass: `ui tiny modal ${this.task['.key']}`
    }
  },
  methods: {
    showModalDetail () {
      $(`.tiny.modal.${this.task['.key']}`)
        .modal('show')
      ;
    },
    deleteTask (key) {
      kanbanref.child(key).remove()
      $(`.tiny.modal.${key}`)
        .modal('hide')
      ;
    },
    nextStep (key) {
      kanbanref.child(key).update({ status: 'todo' })
      $(`.tiny.modal.${key}`)
        .modal('hide')
      ;
    }
  }
}
</script>

<style>

</style>
