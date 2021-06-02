import {userService} from '../_services';

function login(username,password){
    retur dispatch => {
        dispatch({type:userConstants.LOGIN_REQUEST,user});


        userService.login(username,password)
        .then(
            user => {dipatch(success(user))},
            error => {dipatch(failure(error))}

        )
    }
}


















export const userActions = {login,logout,getAll}