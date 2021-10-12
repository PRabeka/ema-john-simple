import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/* steps  for authentication
step:1 initial setup
--------------------------
1.firebase: create project
2.create web app
3.get configuration
4.initialize firebase
5.Enable auth method
--------------------------
step:2 setup component

1.Create Login Component
2.Create Register Coponent
3.Create Route for Login Register
-----------------------------
step:3 Set auth system
1.set up sign in method
2. setup sign logout
3. user state
4. special observer
5. return necessary methods and states from useFirebase
----------------------
step 4:create auth context hook

1.create a auth context
2. Create context provider
3.set context provider contect value
4.create useAuth Hook
5.use auth provider 

step: 5 create private route
1. create private Route
2. set private route
-----------------------
step:6 Redirect after login 
1. after login redirect user to their destination
*/