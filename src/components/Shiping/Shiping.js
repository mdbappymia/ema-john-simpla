import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shiping.css";

const Shiping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="shiping-form">
      <input defaultValue={user.displayName} {...register("name")} />
      <input
        defaultValue={user.email}
        {...register("email", { required: true })}
      />
      <input
        placeholder="Your phone"
        {...register("phone", { required: true })}
      />
      <input
        placeholder="Your address"
        {...register("address", { required: true })}
      />
      {(errors.email || errors.address || errors.phone) && (
        <span className="error">This field is required</span>
      )}

      <input type="submit" />
    </form>
  );
};

export default Shiping;
