import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://limitless-anchorage-22968.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('data added successfully!!');

            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2 className="text-center my-5">Please add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item Name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplierr Name' {...register("supplier", { required: true })} />
                <input className='mb-2' placeholder='Email Address' {...register("email", { required: true })} />
                <input className='mb-2' placeholder='Product Origin' {...register("origin")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Sold item' type="number" {...register("sold")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input className='bookBtn' type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddItems;