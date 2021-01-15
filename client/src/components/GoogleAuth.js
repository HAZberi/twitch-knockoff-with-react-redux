import React, {useEffect} from "react";

const GoogleAuth = () => {

    useEffect(()=>{
        window.gapi.load("auth2", ()=>{
            window.gapi.auth2.init({
                client_id: "749031414634-8af1nvge4p1qnd6dgjhj13s8sptfksgo.apps.googleusercontent.com",
                scope: 'email',
            })
        })
    },[])

    return (
        <div>Google Auth</div>
    )
}

export default GoogleAuth;