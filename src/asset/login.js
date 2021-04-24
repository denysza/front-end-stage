import axios from 'axios';
const baseurl = process.env.REACT_APP_BASE_URL;
export function login(Email, password, language){
    localStorage.setItem("language", JSON.stringify({language:language}))
    if(Email && password){        
        var data = JSON.stringify({"Email":Email,"Password":password});        
        var config = {
          method: 'post',
          url: `${baseurl}/login`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            localStorage.setItem("userData", JSON.stringify(response.data))
            window.location.assign('/app');
        })
        .catch(function (error) {
          alert("login failed")
        });
    }
}

export function logout(){
    localStorage.removeItem("userData");
}

export function getCurrentUser(){
    return JSON.parse(localStorage.getItem("userData"));
}

export function getCurrentLanguage()
{
  return JSON.parse(localStorage.getItem("language"));
}