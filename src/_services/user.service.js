
import { AsyncStorage } from 'react-native';


//login

function login(username,password){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(username,password)
    }

    return fetch('${config.apiurl}/users/authenticate',requestOptions)
    .then(handleResponse)
    .then(user => {
        //set the async storage item
        AsyncStorage.setItem('user': JSON.stringify(user));
        return user;
    })
}

//logout from

function logout() {
    AsyncStorage.removeItem('user');
}