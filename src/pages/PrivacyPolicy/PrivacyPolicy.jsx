import React, { useState, useEffect } from 'react';
import Privacy from "./privacy.png"

const PrivacyPolicy = () => {
  const [updateDate, setUpdateDate] = useState(new Date());

  // Simulate an API call or any logic to update the date
  const updateDateHandler = () => {
    // Replace this with your actual logic to update the date
    setUpdateDate(new Date());
  };

  useEffect(() => {
    // Call the function to update the date
    updateDateHandler();
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img src={Privacy} alt="" style={{ maxWidth: '150px', width: '100%' }} />
      </div>

      <h1>Privacy Policy</h1>
      <p>Last Updated: {updateDate.toLocaleDateString()}</p>

      <p>
        Welcome to 2G0 Cars! At 2G0 Cars, we are committed to prioritizing the privacy
        of our customers and website visitors. This privacy policy document outlines the
        online information collection and usage practices of our company. Please take a
        moment to carefully review this policy.
      </p>

      <p>
        <strong>Information We Collect:</strong> When you visit our website, we collect
        certain information to enhance user experience and customize our services. This
        information may include personal details such as your name, email address, and
        phone number for purposes like reservation processes or contact forms.
      </p>

      <p>
        <strong>Cookies and Tracking Technologies:</strong> To improve our services and
        remember user preferences, we may use cookies and similar tracking technologies
        when you visit our website.
      </p>

      <p>
        <strong>How We Use and Share Information:</strong> We collect information to
        improve user experience and deliver personalized services. Rest assured that we
        never share your information with third parties without your explicit consent.
      </p>

      <p>
        <strong>Security:</strong> We implement various security measures to protect the
        information of our customers. However, it's essential to acknowledge that it's
        impossible to eliminate all risks associated with internet communication and data
        storage.
      </p>

      <p>
        <strong>Changes and Updates:</strong> This privacy policy may be subject to changes
        and updates over time. It is your responsibility to stay informed about any
        modifications.
      </p>

      <p>
        <strong>Contact:</strong> If you have any questions or feedback regarding our
        privacy policy, please reach out to us via [Contact Information].
      </p>

      <p>Thank you.</p>
    </div>
  );
};

export default PrivacyPolicy;
