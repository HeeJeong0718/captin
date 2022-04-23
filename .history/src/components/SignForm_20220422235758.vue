<template>
  <form @submit.prevent="submitform"> <!--form태그에 submit이벤트가 위로 올라면서 이벤트가 실행된다  prevent 로 페이지가 다시 실행되는걸막는다--> 
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
      <button v-on:click="test">test</button>
    
  
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
       
    },
   /*test:function(){
      alert("폼 제출!!");
      this.$http.post('http://localhost:3000/api/post/demo',{})
        .then(function a(response) { 
          console.log(response) 
        })
        .catch(function (error) {
          console.log(error);
        });
    }, */
    test:function(){
       this.$http.post('http://localhost:3000/api/post/demo',{ username : '' , password : ''}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({
               username : '', 
               password : ''
            }),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
        })
    }
    
    
  }

}
</script>

<style>

</style>