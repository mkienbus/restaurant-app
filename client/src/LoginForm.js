import React, {useState} from 'react';

function LoginForm(){

    const [username, setUsername] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username})
        }).then(r => {
            console.log(r)
        })
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "text" id = "username" value = {username} 
                onChange = {e => setUsername(e.target.value)}/>

            </form>
        </div>
    );

}

export default LoginForm;