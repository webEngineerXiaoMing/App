<template>
  <div class="drawer-layout">
    <vue-drawer-layout
      ref="drawer"
      :drawer-width="800">
        <div class="drawer-content" slot="drawer">
        <!-- drawer-content -->
        </div>
        <div slot="content">
        <!-- main-content -->
        </div>
    </vue-drawer-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
