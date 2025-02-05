import { Mail, Phone } from "lucide-react";
import Footer from "./Footer";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactMe() {
  const [state, handleSubmit] = useForm("xqaelzab");

  console.log(state);
  return (
    <section id="contact" className="min-h-[80vh] p-10 px-3 ">
      <h1 className="text-white text-3xl text-center">Get in Touch</h1>
      <div className="gap-2 flex bg-white rounded my-3 p-5">
        <Mail />
        <p>contact.danielamos@gmail.com</p>
      </div>
      <div className="gap-2 flex bg-white rounded my-3 p-5">
        <Phone />
        <p>(+234) 812 958 4035</p>
      </div>
      {state?.succeeded ? (
        <p>Thank You for reaching out. The message has been sent to mail.</p>
      ) : (
        <form
          method="post"
          onSubmit={handleSubmit}
          className="min-h-[60vh]  *:block *:my-4  bg-white rounded my-10 p-5"
        >
          {/*  <label htmlFor="name" className="ml-2 text-xl font-serif">Name</label>
        <input
        id="name"
          type="text"
          className="border-2 border-slate-800 border-solid w-full px-3 py-2 rounded"
          placeholder="Enter your full name"
          />
        <ValidationError
        prefix="Name"
        field="name"
       errors={state.errors}
        />*/}
          <label htmlFor="email" className="ml-2 text-xl font-serif">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-slate-800 border-solid w-full px-3 py-2 rounded"
            placeholder="Enter your email address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="ml-2 text-xl font-serif">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-2 border-slate-800 min-h-[20vh] border-solid w-full px-3 py-2 rounded"
            placeholder="Enter Message"
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="disabled:opacity-40 text-white bg-slate-800 rounded mt-10 block m-auto px-5 py-2 text-xl"
          >
            {state.submitting ? "..." : "Send"}
          </button>
        </form>
      )}
      <Footer />
    </section>
  );
}
