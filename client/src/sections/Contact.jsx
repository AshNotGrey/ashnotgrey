import { useRef, useState } from "react";
import { contactMe } from "../constants";
import emailjs from "@emailjs/browser";

/**
 * Contact component for the portfolio.
 * @returns {JSX.Element} The Contact component.
 */
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  /**
   * Handle input change.
   * @param {Object} event - The input change event.
   */
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  /**
   * Handle form submission.
   * @param {Object} event - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template ID
        {
          from_name: form.name, // from_name is the name of the sender
          to_name: import.meta.env.VITE_EMAILJS_RECEIVER_NAME, // to_name is the name of the receiver
          from_email: form.email, // from_email is the email of the sender
          to_email: import.meta.env.VITE_EMAILJS_RECEIVER_EMAIL, // to_email is the email of the receiver
          message: form.message, // message is the message to be sent
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // user ID or public key
      );
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("An error occurred, Please try again later or contact me directly via email");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='c-space' id='contact'>
      <div className='relative min-h-screen flex flex-col justify-center items-center'>
        <img
          src='/assets/terminal.png'
          alt='terminal background'
          className='absolute inset-o min-h-screen hidden md:flex'
        />
        {/* Consider changing the text below to look like a console only on md and above */}
        <div className='contact-container'>
          <h3 className='head-text'>Lets talk</h3>
          <p className='text-lg text-white-600 mt-3'>{contactMe}</p>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label htmlFor='name' className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                id='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Hashirama Senju'
              />
            </label>
            <label htmlFor='email' className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                id='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='hashiramasenju@gmail.com'
              />
            </label>
            <label htmlFor='message' className='space-y-3'>
              <span className='field-label'>Your message</span>
              <textarea
                name='message'
                id='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button type='submit' className='field-btn' disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
