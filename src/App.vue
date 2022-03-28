<template>
  <div v-if="loading">
    <Spinner class="text-center"/>
  </div>
    <Home/>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import axios from 'axios';
import Spinner from '@/components/spin/spinner.vue';
import Home from '@/views/HomeView.vue';

export default {
  name: 'App',
  data: () =>({
    loading: false
  }),
  components:{Spinner,Home},
  mounted() {
    this.loading= true;
         axios.get('https://comsci.srru.ac.th/qc/employee')
        //  axios.get('https://api.publicapis.org/entries')
        .then(
          res => {
            // console.log(res)
            this.loading= false
          }
        ).catch(error=>{
          console.log(error)
        }
      )
  }
}
</script>
