import axios from '../utils/axios';

class AuthService {
  signIn = (email,password) => {
    
    return new Promise((resolve,reject) => {
      axios.post('/api/home/login',{email, password })
      .then(response => {
        console.log();
        if(response.data.user){
          this.setToken('JWT');
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });

    });
  }


  signInWithToken = () => {
    
    return new Promise((resolve,reject) => {
      axios.post('/api/home/me') //send token by header
      .then(response => {
        console.log();
        if(response.data.user){
          this.setToken('JWT');
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });

    });
  }


  setToken = (token) => {
    localStorage.setItem("accessToken",JSON.stringify(token));
  }


  getToken = () => localStorage.getItem("accessToken");


  isAuth = () => !!this.getToken();
}


const authService = new AuthService();

export default authService;