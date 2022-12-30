import { useState } from "react"

export const Login=()=>{
    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const seek=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })

    
    }

    const onLogin=()=>{
        if (user.username==="mohan"&&user.password==="priya"){
            sessionStorage.setItem("person",user.username)
            window.location.assign("/")
        }
        else{
            alert("Invalid user")
        }
    }

    const onCancel=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }


    return(
        <>
            <div className="mt-lg-5 container">
                <p className="text-center text-success text-uppercase display-6">
                    Placement job list</p>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow-text-primary">
                        <div className="form group">
                            <label>username</label>
                            <input type="text" name="username" onChange={seek} value={user.username} placeholder="username please" className="form-control" />
                        </div>
                        <div className="form group">
                            <label>password</label>
                            <input type="text" name="password" onChange={seek} value={user.password} placeholder="password please" className="form-control" />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="col-2 btn btn-outline-primary" onClick={onLogin}>
                                <i class="bi bi-box-arrow-in-right"></i>

                            </button>
                            <button className="col-2 btn btn-outline-dark" onClick={onCancel}>
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}