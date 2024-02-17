import React, { useState, useEffect } from 'react';
import Privacy from "./privacy.png"
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation("global")
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

      <h1>{t("privacyPolicy.Title")}</h1>
      <p>{t("privacyPolicy.Update")} {updateDate.toLocaleDateString()}</p>

      <p>
      {t("privacyPolicy.P1")}
      </p>

      <p>
        <strong>{t("privacyPolicy.Info")}</strong>{t("privacyPolicy.P2")}
      </p>

      <p>
        <strong>{t("privacyPolicy.Cookies")}</strong> {t("privacyPolicy.P3")}
      </p>

      <p>
        <strong>{t("privacyPolicy.Usage")}</strong>{t("privacyPolicy.P4")} 
      </p>

      <p>
        <strong>{t("privacyPolicy.Security")}</strong>{t("privacyPolicy.P5")}
      </p>

      <p>
        <strong>{t("privacyPolicy.Changes")}</strong>{t("privacyPolicy.P6")} 
      </p>

      <p>
        <strong>{t("privacyPolicy.Contact")}</strong> {t("privacyPolicy.Questions")}
      </p>

      <p>{t("privacyPolicy.Thanks")}</p>
    </div>
  );
};

export default PrivacyPolicy;
