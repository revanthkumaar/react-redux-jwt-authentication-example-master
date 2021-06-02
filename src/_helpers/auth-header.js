export function authHeader() {
    let user = JSON.parse(AsyncStorage.getItem('user');

    if(user && user.token){
        return 
        
        {
            'Authorization' : 'Bearer ' + user.token
        }
    }
    else{
        console.log('user session expired')
        //if the use is not available
        //route him to login page
        //once logged in route him to product page he want to visit
        //use history (routing)
    }

    
    //history in routing 