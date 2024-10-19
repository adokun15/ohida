import { Mail, Phone } from "lucide-react";
import Footer from "./Footer";

export default function ContactMe() {
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
      <form className="min-h-[60vh]  *:block *:my-4  bg-white rounded my-10 p-5">
        <label className="ml-2 text-xl font-serif">Name</label>
        <input
          type="text"
          className="border-2 border-slate-800 border-solid w-full px-3 py-2 rounded"
          placeholder="Enter your full name"
        />
        <label className="ml-2 text-xl font-serif">Email</label>
        <input
          type="email"
          className="border-2 border-slate-800 border-solid w-full px-3 py-2 rounded"
          placeholder="Enter your email address"
        />
        <label className="ml-2 text-xl font-serif">Message</label>
        <textarea
          className="border-2 border-slate-800 min-h-[20vh] border-solid w-full px-3 py-2 rounded"
          placeholder="Enter Message"
        ></textarea>
        <button className="text-white bg-slate-800 rounded mt-10 block m-auto px-5 py-2 text-xl">
          Send
        </button>
      </form>
      <Footer />
    </section>
  );
}
