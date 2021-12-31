import './contact.css'

const Contact = () => {
   return (
      <div className='contact-form'>
         <form action="">
            <h3 className='form-title'>Leave a Message</h3>
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" className='input' name='name' required/>
            
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" className='input' name='email' required/>
            <label htmlFor="msg">Message*</label>
            <textarea name="msg" id="msg" cols="30" rows="10" required></textarea>
            <button className='form-button'>Send Message</button>
         </form>
         
      </div>
   )
}

export default Contact
