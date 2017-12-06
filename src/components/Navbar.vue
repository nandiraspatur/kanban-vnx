<template>
  <div class="ui menu text">
    <div class="image item">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div style="font-size: 25px; margin-left: -10px;" class="header item">
      <b>KANBAN VNX</b>
    </div>
    <a class="right item" @click="showModalTask">
      <div class="ui orange button">
        <i class="add square icon"></i>
        Add New Task
      </div>
    </a>
    <div class="ui tiny modal create">
      <i class="close icon"></i>
      <div class="header">
        Create New Task
      </div>
      <div class="content">
        <div class="ui form fluid">
          <div class="field">
            <label>Title</label>
            <input name="title" placeholder="Title" type="text" v-model="formNewTask.title">
          </div>
          <div class="field">
            <label>Description</label>
            <input name="description" placeholder="Description" type="text" v-model="formNewTask.desc">
          </div>
          <div class="field">
            <label>Point</label>
            <input name="point" placeholder="0" type="text"  v-model="formNewTask.point">
          </div>
          <div class="field">
            <label>Asigned To</label>
            <input name="asigned_to" placeholder="Asigned To" type="text"  v-model="formNewTask.asigned_to">
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div class="ui positive right labeled icon button" @click="createTask">
          Submit
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kanbanref } from '../firebase'
export default {
  data () {
    return {
      formNewTask: {
        title: '',
        desc: '',
        point: 0,
        asigned_to: '',
        status: 'backlog'
      }
    }
  },
  methods: {
    createTask () {
      kanbanref.push(this.formNewTask)
      this.formNewTask.title = ''
      this.formNewTask.desc = ''
      this.formNewTask.point = 0
      this.formNewTask.asigned_to = ''
    },
    showModalTask () {
      // eslint-disable-next-line
      $('.tiny.modal.create')
        .modal('show')
    }
  }
}
</script>

<style>
  div.image.item img {
    width: 50px !important;
  }
</style>
