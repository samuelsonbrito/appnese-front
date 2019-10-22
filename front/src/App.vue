<template>
  
  <div>

    <Login/>


  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
  },
  data: () => ({
    //
  }),
};
</script>
