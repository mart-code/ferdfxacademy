import FooterLogo from "../assets/ferdfx white.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full min-h-20 bg-black p-20">
      <div className="flex flex-col gap-4 basis-[100%] w-full md:basis-[40%] text-white items-start">
        <img
          src={FooterLogo}
          className="w-50 p-0 m-0 object-fill"
          alt="FerdFX Academy Logo "
        />
        {/* <p className="">
          Office: Ajebamidele Line 1, <br /> Ibadan Road, from FerdFX academy
          <br /> Ile-Ife, Osun State
        </p> */}
        <div className="flex flex-col justify-start">
          <p>Follow us on Social Media</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/ferdinand.okafor.56?mibextid=wwXIfr"
              target="_blank"
            >
              <Facebook
                color="#fff"
                className="hover:bg-green-600 transition-all duration-300 rounded-full p-1 size-8"
              />
            </a>
            <a
              href="https://www.instagram.com/trader_ferd?igsh=OGZvOHdpbXhlbjR2&utm_source=qr"
              target="_blank"
            >
              <Instagram
                color="#fff"
                className="hover:bg-green-600 transition-all duration-300 rounded-full p-1 size-8"
              />
            </a>
            <a href="https://x.com/ferdinando_fx?s=21" target="_blank">
              <Twitter
                color="#fff"
                className="hover:bg-green-600 transition-all duration-300 rounded-full p-1 size-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ferdinand-okafor-821b8a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <Linkedin
                color="#fff"
                className="hover:bg-green-600 transition-all duration-300 rounded-full p-1 size-8"
              />
            </a>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 basis-[100%] w-full md:basis-[20%] text-white text-left items-start">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#mentor">Mentorship</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#">Risk Calculator</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
      </ul>
      <div className="flex items-start flex-col w-full basis-[100%] md:basis-[40%]">
        <h2 className="text-5xl font-semibold text-left overflow-hidden text-white">
          Let's Keep you Informed
        </h2>
        <p className="text-white">Subscribe to our Newsletter</p>
        <form
          action="https://formsubmit.co/ferdinandokafor071@gmail.com"
          method="POST"
          className="w-full"
        >
          <input
            type="text"
            className="border-b border-white text-white w-full focus:outline-none outline-none mt-5"
            placeholder="Your Email"
            name="email"
            required
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for subscribing to our Newsletter"
          />
          <input type="hidden" name="_subject" value="New Subscriber" />
          <input type="hidden" name="_template" value="table" />
          <button type="submit" className="btn btn-primary mt-5 text-center">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
