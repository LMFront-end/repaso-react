import React from 'react'
import { useForm } from "react-hook-form";


const FormHook = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
    }

  return (
    <>
    <h1>Form Hook</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            type="text"
            name="titulo"
            placeholder="titulo"
            className="form-control my-2" 
            {...register("titulo", {
                required: true, maxLength: 30
            })}
        />
        <span className="text-danger text-small d-block mb-2">
        {errors.titulo?.type === 'required' && "The title is required"}
        </span>
        
        

        <button className="btn btn-primary">Enviar</button>
    </form>
    </>
  )
}

export {FormHook}