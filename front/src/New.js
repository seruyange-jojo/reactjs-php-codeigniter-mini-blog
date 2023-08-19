import Layout from "./Layout";
import { useState } from "react";


function New(){
    const [inputs, setInputs] = useState({});

    function handleChange(e){
        const name = e.target.name;
        const val = e.target.value;
        setInputs((prev) => ({...prev, [name]:val}))
    }

    async function handleSubmit(e){
        
        e.preventDefault();

        const data = await fetch('http://localhost:8080/note',{
            method : "POST",
            headers : {
                "Content-Type" : 'application/json'
            },
            body : JSON.stringify(inputs)
        });
        const res = await data.json();
        console.log(res);
    }

    return (
        <div className="card shadow border-0 bg-light text-center m-3 p-2 col-lg-8 mx-auto">
            <Layout/>

            <form onSubmit={handleSubmit} className="p-2 m-3">
                <div className="row">
                    <div className="col-lg-4"><label className="form-label fw-bold text-info col-3"> TITLE</label></div>
                    <div className="col-lg"><input type="text" name="title" className="form-control col-9" onChange={handleChange}/></div>
                </div>

                <div className="row my-2">
                    <div className="col-lg-4"><label className="form-label fw-bold text-info"> AUTHOR</label></div>
                    <div className="col-lg"><input type="text" name="author" className="form-control" onChange={handleChange}/></div>
                </div>

                <div className="row">
                    <label className="form-label text-info fw-bold">Content</label>
                    <textarea name="body" className="form-control" onChange={handleChange}/>
                </div>

                <button className="btn d-block btn-warning w-100 my-3">Submit</button>
            </form>

        </div>
    )
}

export default New;