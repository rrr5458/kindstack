import React from 'react';
import '../styles/PageStyles.css';

const TermsOfServicePage: React.FC = () => {
  return (
    <section className="page-container" id="terms-of-service-page">
      <header className="page-header">
        <h1>Terms of Service</h1>
      </header>

      <div className="page-content">
        <p>Last updated: March 15, 2026</p>

        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website or services operated by KindStack WebSolutions ("us", "we", or "our").
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on KindStack WebSolutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
          <li>Attempt to decompile or reverse engineer any software contained on KindStack WebSolutions' website.</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by KindStack WebSolutions at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on KindStack WebSolutions' website are provided on an 'as is' basis. KindStack WebSolutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p>
          Further, KindStack WebSolutions does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall KindStack WebSolutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KindStack WebSolutions' website, even if KindStack WebSolutions or a KindStack WebSolutions authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        </p>

        <h2>5. Revisions and Errata</h2>
        <p>
          The materials appearing on KindStack WebSolutions' website could include technical, typographical, or photographic errors. KindStack WebSolutions does not warrant that any of the materials on its website are accurate, complete, or current. KindStack WebSolutions may make changes to the materials contained on its website at any time without notice. However, KindStack WebSolutions does not make any commitment to update the materials.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us via our Contact page.
        </p>
      </div>
    </section>
  );
};

export default TermsOfServicePage;