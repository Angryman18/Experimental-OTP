import React from "react";

function OTPGenerator({ OTP }: { OTP: number }) {
  return (
    <div className='flex-1 flex justify-center'>
      <div className='text-center bg-slate-100 text-[#444444] p-1 px-4 m-1 rounded-full'>{OTP}</div>
    </div>
  );
}

export default OTPGenerator;
