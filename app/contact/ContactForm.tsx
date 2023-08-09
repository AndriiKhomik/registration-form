"use client";

import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../components/Input";
import CheckboxGroup from "../components/CheckboxGroup";

const groupOptions = [
  { label: "General Inquiry", value: "1" },
  { label: "General Inquiry 2", value: "2" },
  { label: "General Inquiry 3", value: "3" },
  { label: "General Inquiry 4", value: "4" },
];

const config = { label: "label", value: "value" };

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full p-5 md:p-12 relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
          <Input
            id="firstName"
            label="First name"
            register={register}
            errors={errors}
          />
          <Input
            id="lastName"
            label="Last name"
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="phoneNumber"
            label="Phone number"
            register={register}
            errors={errors}
            placeholder="+1 012 3456 789"
          />
        </div>
        <h4 className="text-sm font-semibold mt-6 md:mt-11 mb-3 md:mb-5">
          Select Subject?
        </h4>
        <div className="mt-2 mb-4 md:mb-9">
          <CheckboxGroup
            control={control}
            label="Pick 2-3"
            name="subject"
            options={groupOptions}
            config={config}
          />
        </div>
        <Input
          id="message"
          label="Message"
          placeholder="Write your message.."
          register={register}
          errors={errors}
        />
        <div className="md:text-right mt-4 md:mt-6">
          <button
            type="submit"
            className="bg-black text-white mt-4 rounded-md w-full text-sm py-2 md:w-[216px] md:py-3"
          >
            Send message
          </button>
        </div>
      </form>
      <div className="custom-bg" />
    </div>
  );
};

export default ContactForm;
