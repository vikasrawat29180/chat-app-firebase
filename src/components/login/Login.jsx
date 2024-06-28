import { useState } from "react";
import "./login.css"


const Login=()=>{
    const [avatar,setAvatar]=useState({
        file:null,
        url:""

    })

    const handleAvatar=e=>{
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }



    return(
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form >
               <input type="text" placeholder="Email" name="email" />
               <input type="password" placeholder="Password" name="password" />
               <button>Sign in</button>
                </form>
            </div>
            <div className="seprator"></div>
            <div className="item">
            <h2>Create an Account</h2>
                <form >
                    <label htmlFor="file">
                        <img src="" alt="" />
                        Upload an image
                    </label>
               <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar} />
               <input type="text" placeholder="Userame" name="username" />
               <input type="text" placeholder="Email" name="email" />
               <input type="password" placeholder="Password" name="password" />
               <button>Sign in</button>
                </form>
            </div>



        </div>
    )
}

export default Login;