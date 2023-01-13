import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3y804g",
        "template_m0p5wg4",
        form.current,
        "LgnCgiysF7yz288el"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="max-w-[1140px] m-auto p-4 py-16">
      <h2 className="text-center text-gray-700">Send Me a Message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://tinyurl.com/ydv3efad"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="First"
              name="from_fName"
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Last"
              name="from_lName"
            />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Phone"
              name="phone"
            />
            <div className="border m-2 p-2 text-center">
              <label>Requested Time</label>
              <select className="border rounded-md m-2 p-2" name="time">
                <option>Morning</option>
                <option>Mid-Day</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            <div className="border m-2 p-2  text-center">
              <label>Requested Date</label>
              <input
                type="date"
                className="border rounded-md p-2 m-2"
                name="date"
              />
            </div>
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            <button className="col-span-2 m-2" onSubmit={sendEmail}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
