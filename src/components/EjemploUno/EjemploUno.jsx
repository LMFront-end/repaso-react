import React, {useState} from 'react'
import { useForm } from "react-hook-form";


const EjemploUno = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const [entrada, setEntrada] = useState([]);

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);

        setEntrada([
            ...entrada,
            data
        ])
    }

    return (
    <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

        <input 
        type="text"
        name="Title"
        placeholder="enter title"
        className="form-control my-2"
        {...register("Title", {
            required: true, maxLength: 30
        })}
        />
        <span className="text-danger text-small d-block mb-2">
        {errors.Title?.type === 'required' && "The title is required"}
        </span>

        <input 
        type="text"
        name="Description"
        placeholder="enter description"
        className="form-control my-2"
        {...register("Description", {
            required: true, maxLength: 30
        })}
        />
        <span className="text-danger text-small d-block mb-2">
        {errors.Description?.type === 'required' && "The description is required"}
        </span>

        <button className="btn btn-primary"> submit </button>
        </form>

        <ul>
            {
                entrada.map((item, index)=>{
                    return <li key={index}>{item.Title} {item.Description}</li>
                })
            }
        </ul>
    </>
    )
}

export {EjemploUno}