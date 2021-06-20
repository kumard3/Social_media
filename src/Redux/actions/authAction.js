import firebase from 'firebase/app'

import auth from '../../firebase'
import LoginScreen from '../../screens/loginScreen/LoginScreen'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType'




export const login = () => async dispatch => {

    try{
        dispatch({
            type:LOGIN_REQUEST,

        })
        const provider  = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const res = auth.signInWithPopup(provider)


        const accessToken = (await res).credential.accessToken
        
        const profile = {
            name:(await res).additionalUserInfo.profile.name,
            photoURL:(await res).additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem("social-access-token",accessToken)
        sessionStorage.setItem("social-profile",JSON.stringify(profile))

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch ({
            type:LOAD_PROFILE,
            payload:profile
        })


    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })

    }
}

export const log_out = () => async dispatch => {

    await auth.signOut()
    dispatch({
        type:LOG_OUT,

    })
sessionStorage.removeItem("social-access-token")
sessionStorage.removeItem("social-user")
} 