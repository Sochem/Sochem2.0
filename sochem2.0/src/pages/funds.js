import Navbar from "@/components/navbar";
import FundsCarousel from "@/components/fundsCarousel";
import Footer from "@/components/footer.js";
import React, { useState } from "react";
import { useRouter } from "next/router";
import FundsDataService from '../../services/funds_db_services'

import toast, { Toaster } from "react-hot-toast";

export default function Funds() {

  const router = useRouter();
  const [formValues, setFormValues] = useState("");

  const handleInput = (event) => {
    setFormValues({
      ...formValues, [event.target.name] : event.target.value,
    });
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    const fundEntry = {
      amount: Number(formValues["amount"]), batch: Number(formValues["batch"]), 
      company: formValues["company"], contact: Number(formValues["contact"]), 
      email: formValues["email"], linkedin: formValues["linkedin"],
      name: formValues["name"]
    }

    try {
        await FundsDataService.addEntry(fundEntry);
        router.push("/funds");

        document.getElementById("fund-form").reset();

        toast.success("Thanks for your donation! 🥳");

    } catch(err) {
        console.log(err);
        toast.error("An error occured!");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[#040D21] w-full ">
        <Toaster />
        <div className="font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl">
          <p className="mt-20">
            The<span className="text-[#2A6BFF]"> Grand</span> Alumni!
          </p>
        </div>
        <FundsCarousel />
      </div>
      <div className="bg-slate-100 py-10">
        <form id='fund-form' className="mx-20 my-10 bg-white rounded-2xl flex flex-col md:flex-row"
              onSubmit={(event) => handleSubmit(event)}>
          <div className=" p-20 flex flex-col w-3/5">
            <h1 className="text-3xl font-bold mb-6">Alumni Fund Form</h1>
            <div className="pb-5 justify-between flex">
              <label className="text-lg">Email*</label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="abc@company.com" name="email" 
                type="email" onChange={(event) => handleInput(event)}
                required
              ></input>
            </div>
            <div className="pb-5 justify-between flex">
              <label className="text-lg">Name* </label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="Ethan Hunt" name="name"
                onChange={(event) => handleInput(event)}
                required
              />
            </div>
            <div className="pb-5 justify-between flex">
              <label class="text-lg">Batch*</label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="2000" name="batch" 
                type="number" onChange={(event) => handleInput(event)}
                required
              />
            </div>
            <div className="pb-5 justify-between flex">
              <label className="text-lg">LinkedIn Profile* </label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="http://linkedin.com/in/accountaname" name="linkedin"
                type="url" onChange={(event) => handleInput(event)} 
                required
              />
            </div>
            <div className="pb-5 justify-between flex">
              <label className="text-lg">Contact No*</label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="9999999999" name="contact" 
                type="number" onChange={(event) => handleInput(event)}
                required
              />
            </div>
            <div className="pb-5 justify-between flex">
              <label className="text-lg">Current Company*</label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="Apple Inc." name="company" 
                onChange={(event) => handleInput(event)}
                required
              />
            </div>
            <div className="pb-10 justify-between flex">
              <label className="text-lg">Amount* </label>
              <input
                className="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
                placeholder="50000" name="amount" 
                type="number" onChange={(event) => handleInput(event)}
                required
              />
            </div>
            Please fill all the fields before submitting that are marked with*
            <button
              className="bg-black text-white text-xl rounded-full mt-5 py-1 "
              type="submit"
              onClick={(event) => handleSubmit(event)}>
              SUBMIT
            </button>
          </div>
          <div className="flex flex-col w-2/5 py-20 mr-20 justify-between">
            <h1 className="text-3xl font-bold mb-6">Why</h1>
            <p className="mb-5">
              SoChem organizes year long workshops and events for the overall
              development of its members. Alumni Funds helps us arrange events
              and competitions!{" "}
            </p>
            <h1 class="text-3xl font-bold mb-3">Account Details </h1>
            <img class="h-40 w-40 rounded pb-3" />
            <p class="mb-10">UPI Id: 9026663689@paytm</p>
            <h1 class="text-3xl font-bold mb-2">Contact Us:</h1>
            abc@iitbhu.ac.in
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
