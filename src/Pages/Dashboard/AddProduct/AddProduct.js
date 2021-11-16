import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
         console.log(data);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('New Product Inserted ');
                    reset();
                }
            })
    }
    return (
        <div className="add-product my-5">
        <h1 className="my-5"> Please add a new meal:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Name of the product" />
            <input {...register("img")} placeholder="image url of product" />
            <input type="number" {...register("price")} placeholder="price" />
            <textarea {...register("description")} placeholder="Description of the product" />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;