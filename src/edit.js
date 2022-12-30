import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { onFetch, onUpdate } from "./join"

export const Edit=()=>
{

    const[jobs,setJobs]=useState(
        {
            "CompanyName":"",
            "JobRole":"",
            "Availablevacancy":0,
            "SelectedCandidates":0,
            "Qualification":"",
            "ConductingDate":0,
            "Salery":0
            
            

        })

        const{ComName}=useParams()

        const Collect=async()=>{
            const hey = await onFetch(ComName)
            setJobs(hey.data)
        }
        useEffect(()=>{
            Collect()
        
        },[]

        )

        const gather=(mohan)=>
        {
            const{name,value}=mohan.target
            setJobs((old)=>{
                if (name==="Availablevacancy"||name==="SelectedCandidates"||name==="Salery")
                {
                    return{
                        ...old,
                        [name]:parseInt(value)
                    }
                }
                else{
                    return{
                        ...old,
                        [name]:value
                    }
                }
            })
        }
        const pushing=async()=>{
            const yy = await onUpdate(ComName,jobs)
            alert(JSON.stringify(yy.data))
            window.location.assign("/")
        }

        const cancel=()=>{
            setJobs(()=>{
                return{
                    "CompanyName":"",
                    "JobRole":"",
                    "Availablevacancy":0,
                    "SelectedCandidates":0,
                    "Qualification":"",
                    "ConductingDate":0,
                    "Salery":0
            

                }
            })
        }
        return(
            <>
                <div className="mt-4 row justify-content-center">
                    <p className="text-center text-secondary text-uppercase display-5">
                        Edit existing Companies
                    </p>
                    <div className="col-lg-8 col-md-10 col-sm-12 p-5 shadow-lg">
                        <div className="form group">
                            <label>CompanyName</label>
                            <input type="text" name="CompanyName" readOnly onChange={gather} value={jobs.CompanyName} placeholder="Name of the Company" className="form-control" />
                        </div>
                        <div className="row justify-content-between">
                            <div className="col">
                                <label>JobRole</label>
                                <input type="text" name="JobRole" onChange={gather} value={jobs.JobRole} placeholder="Role of the candidates" className="form-control" />
                            </div>
                            <div className="col">
                                <label>Qualification</label>
                                <input type="text" name="Qualification" onChange={gather} value={jobs.Qualification} placeholder="Qualification for the job" className="form-control" />
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col">
                                <label>Availablevacancy</label>
                                <input type="text" name="Availablevacancy" onChange={gather} value={jobs.Availablevacancy} placeholder="No of Vacancy" className="form-control" />
                            </div>
                            <div className="col">
                                <label>SelectedCandidates</label>
                                <input type="text" name="SelectedCandidates" onChange={gather} value={jobs.SelectedCandidates} placeholder="No of candidates selected in placement" className="form-control" />

                            </div>
                            <div className="form group">
                                <label>ConductingDate</label>
                                <input type="text" name="ConductingDate" onChange={gather} value={jobs.ConductingDate} placeholder="Placement Conducted Date" className="form-control" />
                            </div>
                        </div>
                        <div className="form group">
                            <label>Salery</label>
                            <input type="text" name="Salery" onChange={gather} value={jobs.Salery} placeholder="Salery for a job" className="form-control" />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="col-2 btn btn-outline-success" onClick={pushing}>
                                <i class="bi bi-cloud-upload-fill"></i>
                            </button>
                            <button className="col-2 btn btn-outline-dark" onClick={cancel}>
                                <i class="bi bi-x-square-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )

        
    
}
