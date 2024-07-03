<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'defaultLayout',
  components: {
    Navbar,
  },
}
</script>
