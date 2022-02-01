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
            console.log(r)
            r.json().then(user => setUser(user))
        })
        // need to reset input field to empty
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Create an account with a username:</label>
                <input 
                type = "text" 
                id = "signupUsername" 
                value = {username} 
                onChange = {e => setUsername(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default SignUpForm;