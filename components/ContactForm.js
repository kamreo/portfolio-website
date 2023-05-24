import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";


const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      await axios.post("https://formspree.io/f/mrgvvkwv", {
        ...data,
        email: "kamil.jonak@protonmail.com",
      });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-white" htmlFor="name">Name</label>
        <input
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 w-full"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <div className="text-red-500">This field is required</div>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-white" htmlFor="email">Email</label>
        <input
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 w-full"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <div className="text-red-500">This field is required</div>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-white" htmlFor="message">Message</label>
        <textarea
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 w-full"
          rows="4"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <div className="text-red-500">This field is required</div>}
      </div>
      <button
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
        type="submit"
      >
        Send Message
      </button>

      {submitting && <p className="py-2 text-blue-500 font-medium">Sending message...</p>}
      {submitStatus === "success" && (
        <p className="py-2 text-green-500 font-medium">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="py-2 text-red-500 font-medium">
          An error occurred while sending the message. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;