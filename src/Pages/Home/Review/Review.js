import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://infinite-tundra-94771.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('review placed successfully');
                    reset();
                }
            })

    }
    return (
        <div className="review-form my-5" >
            <h1> Please kindy give your review: </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Your name:</label>
                <input {...register("Name")} />
                <label> Description: :</label>
                <textarea {...register("review")} />
                <label> Rating out of 5 :</label>
                <select {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;