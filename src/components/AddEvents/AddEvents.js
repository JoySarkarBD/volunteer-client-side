import React from "react";
import "./AddEvents.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hook/useFirebase";

const AddEvents = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-info">Please Add Events</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="name"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <br />
              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
              />
              <br />
              <small> use this link as img: https://i.ibb.co/bJCWJ9G/extra-Volunteer.png</small>
              <br />
              <select {...register("EventColor")} className="p-2 m-2 w-100">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="black">black</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
