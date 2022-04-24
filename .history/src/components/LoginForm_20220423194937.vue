<template>
   <div>
       <h1>로그인form</h1>
     <form @submit.prevent="submitForm">
      <div>
          <label for="username">username</label>
          <input type="text"  id="username" v-model="username">
      </div>
      <div>
          <label for="password">password</label>
          <input type="text" id="password" v-model="password">
      </div>
      <button type="submit">로그인하기</button>
   </form>
   </div>
   
</template>

<script>
export default {
    data(){
        return{
            username :' ', 
            password : ' ',
        }
    },
   methods:{
       submitForm(){
         
       }
   }
}
</script>

<style>

</style>