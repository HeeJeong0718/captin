//api 호출 함수 모듈화

//1.회원가입api 호출 함수
function RegisterUser(){
    const url = 'http://localhost:3000/api/post/demo' 
    return this.$http.post(url);
}

export {RegisterUser};