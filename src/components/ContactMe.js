import Footer from "./Footer";

export default function ContactMe() {
  return (
    <section className="min-h-[80vh] p-10  bg-gradient-to-br from-pink-200 to-purple-500">
      <h2>
        You Can Reach Out By Filling the fields below or your can just{" "}
        <a href="/#">Emailing</a> me
      </h2>
      <form className="min-h-[60vh] md:w-1/2 mx-auto *:block *:my-4  bg-white rounded my-10 p-5">
        <h1 className="text-3xl text-center">Contact Me</h1>
        <label className="ml-2 text-xl font-serif">Name</label>
        <input
          type="text"
          className="border-2 border-purple-500 border-solid w-full px-3 py-2 rounded"
          placeholder="Enter your full name"
        />
        <label className="ml-2 text-xl font-serif">Email</label>
        <input
          type="email"
          className="border-2 border-purple-500 border-solid w-full px-3 py-2 rounded"
          placeholder="Enter your email address"
        />
        <label className="ml-2 text-xl font-serif">Message</label>
        <textarea
          className="border-2 border-purple-500 min-h-[20vh] border-solid w-full px-3 py-2 rounded"
          placeholder="Enter Message"
        ></textarea>
        <button className="text-white bg-purple-500 rounded mt-10 block m-auto px-5 py-2 text-xl">
          Send
        </button>
      </form>
      <Footer />
    </section>
  );
}
