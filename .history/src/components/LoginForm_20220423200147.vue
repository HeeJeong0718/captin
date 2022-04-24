<template>
   <div>
       <h1>로그인form</h1>
     <form @submit.prevent="submitform">
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
            loginMsg : ''
        }
    },
    methods:{
    async submitform(){
      const userData = {
           username:this.username,
            password:this.password,
            nickname:this.nickname, 
      };
      //const response = await RegisterUser(userData);
      //response에 있는 데이터를 꺼내쓰고싶을떄{ } 사용한다
      const { data  } = await loginUser(userData);
      console.log("response" + JSON.stringify(data.username)); 
      this.logmessage = `${data.username} 님이 가입되셧습니다`;
      this.initForm(); //initForm 함수실행
    },
    initForm(){ //폼 초기화시키기
      this.username = ''; 
      this.password = '';
      this.nickname = '';
    }, 
  },
}
</script>

<style>

</style>