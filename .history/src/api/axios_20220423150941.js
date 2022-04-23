//api 호출 함수 모듈화
import axios from 'axios'

//1.회원가입api 호출 함수
function RegisterUser(){
    const url = 'http://localhost:3000/api/post/demo' 
    return axios.post(url);
}

export {RegisterUser};