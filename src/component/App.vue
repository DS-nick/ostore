<template>
<div>
  
<compHeader/>


<router-view></router-view>
<compFooter/>
</div>
  
</template>

<script>
import compHeader from './Header'
import compFooter from './Footer'


export default {
  components: {
    compHeader,
    compFooter,
    
  },
  created() {
    console.log('Срфботал App')
    this.$store.dispatch('refreshToken')
  }
}
</script>

<style>

</style>

