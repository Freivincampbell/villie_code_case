import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import './contactUs.css';
import { sendContactForm } from '../service/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

  const [emailValidationMessage, setEmailMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const isValidEmail = async (value) => {
    if (!isEmpty(value)) {
      const valid = isEmail(value);
      if (!valid) {
        setEmailMessage(valid ? '' : 'Email is not valid');
        return false;
      }
    }
    setEmailMessage('');
    return true;
  };


  const onSubmit = async (formData) => {
    try {
      await sendContactForm(formData);
        toast.success('Thanks for contacting us!');
        reset();
    } catch (e) {
        toast.error('Something went wrong');
    }
  }

  return (
    <>
      <ToastContainer />
      <form id="userForm" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 mt-4">
              <div className="d-flex flex-row justify-content-center">
                <h3>Contact <span className="highlight">Us</span></h3>
              </div>
              <div className="px-4">
                <hr className='separator' />
              </div>
              <div className="d-flex flex-row flex-wrap justify-content-between px-4">
                <div className="form-group w-40">
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      {...register('name', {
                        required: { message: 'Required' },
                        maxLength: { value: 100, message: 'Name cannot exceed 100 characters' },
                        minLength: { value: 2, message: 'Name is too short' },
                      })}
                  />
                  {errors.name
                      && (
                          <small className="error-message">
                            {errors.name.message}
                          </small>
                      )}
                </div>
                <div className="form-group w-40">
                  <label htmlFor="email">Email</label>
                  <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      {...register('email', {
                        required: 'Required',
                        validate: isValidEmail,
                        maxLength: { value: 250, message: 'Email cannot exceed 250 characters' }
                      })}
                  />
                  {errors.email
                      && (
                          <small className="error-message">
                            {errors.email.message}
                          </small>
                      )}
                  {errors.email && errors.email?.type === 'validate'
                      && (
                          <small className="error-message">
                            {emailValidationMessage}
                          </small>
                      )}
                </div>
                <div className="form-group w-40">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone"
                      {...register('phone')}
                  />
                </div>
                <div className=" w-100 mt-2">
                  <hr className='separator' />
                </div>
                <div className="form-group no-space w-100">
                  <label htmlFor="subject">Subject</label>
                  <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject"
                      {...register('subject', {
                        required: 'Required',
                      })}
                  />
                  {errors.subject
                      && (
                          <small className="error-message">
                            {errors.subject.message}
                          </small>
                      )}
                </div>
                <div className="form-group w-100">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control"
                            id="message"
                            name="message"
                            rows="8"
                            {...register('message', {
                              required: 'Required',
                            })}
                  >
                </textarea>
                  {errors.message
                      && (
                          <small className="error-message">
                            {errors.message.message}
                          </small>
                      )}
                </div>

              </div>
              <div className="d-flex flex-row flex-nowrap justify-content-end px-4 mt-5 me-3">
                <button
                    className="sendBtn"
                    type="submit"
                >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );


}

export default ContactUs;