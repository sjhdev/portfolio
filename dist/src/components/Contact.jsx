import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/9d0a515f-0e96-4e67-a217-42d099e43b18"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
            </form>
         </div>
      </div>
   )
}

export default Contact;