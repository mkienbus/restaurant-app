import React, {useState} from 'react';


function SignUpForm({setUser}){
    const [username, setUsername] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch('/users',{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username})
        }).then(r => {
            r.json().then(user => setUser(user))
        }).then(
            setUsername('')
        )

    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Username:</label>
                <input 
                type = "text" 
                id = "signupUsername" 
                value = {username} 
                onChange = {e => setUsername(e.target.value)}/>
                <button>Create</button>
            </form>
        </div>
    )

}

export default SignUpForm;