<template>
  <form @submit="submitform"> <!--form태그에 submit이벤트가 위로 올라면서 이벤트가 실행된다 --> 
    <div>
      <label for="username">username</label>
      <input type="text" name="" id="username" v-model="username">
    </div>
    <div>
      <label for="password">password</label>
      <input type="text" name="" id="password" v-model="password">
    </div>
    <div>
      <label for="nickname">nickname</label>
      <input type="text" name="" id="nickname" v-model="nickname">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data(){
    return{  //inputbox 에 연결하기위해서 data생성 v-model로 연결해준다
      username:"",
      password:"",
      nickname:"", 
    }
  }, 
  methods:{
    submitform(){

    }
  }

}
</script>

<style>

</style>