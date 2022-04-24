//api 호출 함수 모듈화
import axios from 'axios'
//axios 를 인스턴스화 시켜서 만들기
const instance = axios.create({
    baseURL : 'http://localhost:3000/',
  // baseURL : process.env.VUE_APP_API_URL, //.env에서 설정한 api 들고오기 
});

//1.회원가입api 호출 함수 --기존
/*function RegisterUser(userData){
    const url = 'http://localhost:3000/api/post/demo' 
    return axios.post(url ,userData);
}*/
//1-1. axios 인스턴스화 시킨걸로 호출하기
function RegisterUser(userData){
    return instance.post('api/post/demo' , userData);
}
//2.로그인하기
function loginUser(userData){
    return instance.post('/api/post/login' , userData);
}


export {RegisterUser};