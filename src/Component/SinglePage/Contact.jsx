
const Contact = () => {
    const handleCLick = e =>{
        e.preventDefault()
        
        const form = e.target 
        e.form.reset()
    }
    return (
        <div>
            <div className=" py-10 container mx-auto">
      <div className="">
        <h1 className="text-3xl text-center font-bold mb-4">Contact Us</h1>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
          <p>
            If you have any questions, suggestions, or need assistance, please don't hesitate to contact us. We're here to help!
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contact Information:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Email: contact@filmflex.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: 123 Asulia, Savar, Dhaka, BD</li>
            </ul>
          </div>
          <div className="mt-4 w-2/4 mx-auto">
            <h3 className="text-lg font-semibold">Send Us a Message:</h3>
            <form onSubmitCapture={handleCLick} className="mt-2">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold" htmlFor="message">Your Message</label>
                <textarea 
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <input type="submit" className="bg-blue-500  text-white py-2 px-4 rounded-full" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;