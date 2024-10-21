import {
  Caption,
  commonClassNameOfInput,
  PrimaryButton,
  Title,
} from "@/components/ui/Design";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAuction = () => {
  const [imagePreview, setImagePreview] = useState("");
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl lg:pl-[320px]">
        <Title level={3} className="text-5xl text-[#d6482b]  mb-5">
          Create Auction
        </Title>
        <hr className="my-5" />
        <form>
          <div className="w-full">
            <Caption className="mb-2">Title *</Caption>
            <input
              type="text"
              name="title"
              className={`${commonClassNameOfInput}`}
              placeholder="Title"
              required
            />
          </div>
          <div className="py-5">
            <Caption className="mb-2">Category *</Caption>
            <select className={`${commonClassNameOfInput}`}>
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2">
              <Caption className="mb-2">Condition *</Caption>
              <select className={`${commonClassNameOfInput}`}>
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Starting Bid * </Caption>
              <input
                type="number"
                name="lengthpic"
                placeholder="Starting Bid"
                className={`${commonClassNameOfInput}`}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="w-1/2 flex flex-col flex-1">
              <Caption className="mb-2">Auction Starting Time *</Caption>
              <DatePicker
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat={"MMMM d,yyyy h,mm aa"}
                className={`w-full ${commonClassNameOfInput}`}
              />
            </div>
            <div className="w-1/2 flex flex-col flex-1">
              <Caption className="mb-2">Auction End Time</Caption>
              <DatePicker
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat={"MMMM d,yyyy h,mm aa"}
                className={`w-full ${commonClassNameOfInput} `}
              />
            </div>
          </div>
          
          <div>
            <Caption className="mb-2">Description *</Caption>
            <textarea
              name="description"
              className={`${commonClassNameOfInput}`}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div>
            <Title level={3} className="mb-2">
              Auction item image
            </Title>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  {imagePreview ? (
                    <img src={imagePreview} className="w-44 h-auto" />
                  ) : (
                    <>
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                    </>
                  )}

                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-4 w-[100%] flex justify-center items-center">
            <button className="bg-[#d6482b] font-semibold hover:bg-[#b8381e]  text-xl transition-all duration-300  py-2 px-12 rounded-md text-white w-">
              Create Auction
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateAuction;
