import { ArrowRight } from "lucide-react";
const Contact = () => {
  return (
    <div
      id="support"
      className="mb-35 px-10 md:flex-row flex-col flex justify-end w-full min-h-[10vh] items-center"
    >
      <div className="flex flex-col sm:items-start items-center w-full gap-4 ">
        <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-white">
          Contact Us
        </p>
        <h2 className="text-5xl font-semibold text-center sm:text-left overflow-hidden">
          Get in touch with us
        </h2>
        <p className="text-center sm:text-left">
          We are here to answer all your questions. <br /> We will get back to
          your in no more than 24 hours
        </p>
      </div>
      <form
        action="https://formsubmit.co/ferdinandokafor071@gmail.com"
        className="flex flex-col items-start w-full shadow-lg p-10"
        method="POST"
        name="contact"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="border-b-1 border-solid border-gray-500 outline-none focus:outline-none p-2 w-full mb-2"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          className="border-b-1 border-solid border-gray-500 outline-none focus:outline-none p-2 w-full mb-2"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="text"
          name="message"
          className="border-b-1 border-solid border-gray-500 outline-none focus:outline-none p-2 w-full"
          placeholder="Message"
          required
        />

        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting us, we will get back to you shortly!"
        />
        <input type="hidden" name="captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Submission" />
        <input type="hidden" name="_template" value="table" />
        <button type="submit" className="btn btn-primary mt-5">
          <ArrowRight className="arrow w-5 h-5" /> Send message
        </button>
      </form>
    </div>
  );
};
export default Contact;
