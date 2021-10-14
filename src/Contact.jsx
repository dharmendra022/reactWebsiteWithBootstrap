import React,{useState} from "react";
const Contact = () => {


    const [data, dataState] = useState({
        fullname:"",
        number:"",
        email:"",
        msg:"",
    })

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        dataState((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My Moble number is ${data.number}. Email is ${data.email}  Message is ${data.msg}  `)
    }

     
   

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text"
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             placeholder="Enter Your Name"
                             name="fullname"
                             value={data.fullname}
                             onChange={InputEvent} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="number"
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             placeholder="Enter your Number"
                             name="number"
                             value={data.number}
                             onChange={InputEvent} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email"
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             placeholder="name@example.com"
                             name="email"
                             value={data.email}
                             onChange={InputEvent} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Message</label>
                            <input type="text"
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             placeholder="Your Message is"
                             name="msg"
                             value={data.msg}
                             onChange={InputEvent} />
                        </div>
                        

                      

                        <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit Form</button>

                        </div>
                        </form>



                    </div>

                </div>

            </div>
        </>
    )
}
export default Contact;