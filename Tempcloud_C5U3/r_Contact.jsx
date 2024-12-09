import "./Contact.css"

function Contact(){
    return(
        <div className="con">
            
            <h2>Contact Us</h2>
           
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" />

            <label htmlFor="no">Mobile</label>
            <input type="number" name="" id="no" />

            <input type="Submit" value="Submit"/>
            
        </div>
    )
}

export default Contact;