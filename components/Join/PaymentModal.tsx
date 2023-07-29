'use client'
import React, { useEffect, useState } from 'react';
import SignupForm from './SignUpForm';
import { AiFillCloseCircle } from 'react-icons/ai';
import PaymentForm from './PaymentForm';
import jwt_decode from 'jwt-decode';

interface ModalProps {
  onClose: () => void;
}
const PaymentModal: React.FC<ModalProps> = ({ onClose }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      setAuthenticated(false);
    } else {
      try {
        const decodedToken = jwt_decode<{ exp: number }>(jwtToken);
        const expirationTime = decodedToken.exp * 1000;

        if (expirationTime <= Date.now()) {
          localStorage.removeItem('jwtToken');
          setAuthenticated(false);
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        localStorage.removeItem('jwtToken');
        setAuthenticated(false);
      }
    }
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="flex justify-center items-center  "><AiFillCloseCircle onClick={onClose} className='text-orange-400 h-10 w-10 cursor-pointer hover:text-orange-500 transition-all ' /></div>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#2C2F34] outline-none focus:outline-none">
            {isAuthenticated ? <PaymentForm /> : <SignupForm />}
          </div>
        </div>
      </div>
      <div onClick={onClose} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
export default PaymentModal;
