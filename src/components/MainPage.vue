<template>
<div class="ui container-kanban">
  <Navbar/>
  <div class="ui grid stackable">
    <div class="row">
      <div class="four wide column">
        <Backlog/>
      </div>
      <div class="four wide column">
        <Todo/>
      </div>
      <div class="four wide column">
        <Doing/>
      </div>
      <div class="four wide column">
        <Done/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Backlog,
    Todo,
    Doing,
    Done,
    Navbar
  }
}
</script>

<style>

</style>
