import React from 'react';
import '../styles/PageStyles.css';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="page-container" id="privacy-policy-page">
      <header className="page-header">
        <h1>Privacy Policy</h1>
      </header>

      <div className="page-content">
        <p>Last updated: March 15, 2026</p>

        <p>
          At KindStack WebSolutions, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
        </p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li>Name and Contact Data</li>
          <li>Email Addresses</li>
          <li>Phone Numbers</li>
          <li>Business Information</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To fulfill and manage your orders and requests.</li>
          <li>To deliver targeted advertising to you.</li>
          <li>To request feedback and to contact you about your use of our Website.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the services within a secure environment.
        </p>

        <h2>4. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal information we hold about you. If you would like to exercise any of these rights, please contact us using the contact details provided below.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us or contact us via our Contact page.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;