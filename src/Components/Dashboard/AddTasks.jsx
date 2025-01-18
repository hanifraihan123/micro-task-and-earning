import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_image_hosting_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddTasks = () => {

    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxios();
    const {role} = useRole();
    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
      if(data.amount > role?.coin){
        toast.error('Insufficient amount to pay')
        navigate('/dashboard/purchaseCoin')
        return;
      }
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const tasksData = {
                title: data.title,
                details: data.details,
                workers: parseInt(data.workers),
                amount: parseInt(data.amount),
                deadline: startDate,
                info: data.info,
                image: res.data.data.display_url,
                email: user?.email,
                name: user?.displayName,
                buyerPhoto: user?.photoURL
            }
            const taskInfo = await axiosSecure.post('/tasks',tasksData)
            if(taskInfo.data.insertedId){
                toast.success('Task Added Successfully')
            }
        }
    }

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-4">Add New Task</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input type="text" {...register("title")} placeholder="Enter Title Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Details</span>
          </label>
          <input type="text" {...register("details")} placeholder="Enter Description" className="input input-bordered" required />
        </div>
       <div className="flex gap-4">
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Required Workers</span>
          </label>
          <input type="number" {...register("workers")} placeholder="Workers Qty" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Payable Amount</span>
          </label>
          <input type="number" {...register("amount")} placeholder="Enter Amount" className="input input-bordered" required />
        </div>
       </div>
        <div className="flex gap-4">
        <div className="w-1/3">
        <label className="label">
            <span className="label-text">Deadline</span>
          </label>
        <DatePicker className="input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className="w-1/3">
        <label className="label">
            <span className="label-text">Submission Info</span>
          </label>
        <select defaultValue='default' {...register("info")} className="select select-bordered w-full">
  <option disabled value="default">Who shot first?</option>
  <option>Screenshot</option>
  <option>Image</option>
  <option>Text</option>
</select>
        </div>
        <div>
        <label className="label">
            <span className="label-text">Image URL</span>
          </label>
        <input type="file" {...register("image")} className="file-input file-input-bordered" />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
        </div>
    );
};

export default AddTasks;