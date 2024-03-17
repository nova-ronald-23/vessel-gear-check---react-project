import React, { useState } from 'react';
import './VerificationPage.css';

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Verification Code:', verificationCode);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="lbody">
    <div className="verification-page">
      <form onSubmit={handleSubmit} className="verification-form">
        <h2 className='verification-title'>Verification Page</h2>
        <input
          type="text"
          placeholder="Enter verification code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          disabled={isSubmitting}
          className="verification-input"
        />
        <button type="submit" disabled={isSubmitting} className="verification-button">
          Verify
        </button>
        <button className="resend-btn" onClick={() => console.log('Resend verification code')}>
          Resend
        </button>
      </form>
    </div>
    </div>
  );
};

export default VerificationPage;