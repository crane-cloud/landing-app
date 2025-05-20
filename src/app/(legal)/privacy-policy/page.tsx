import LegalSection from "@/components/common/LegalSection";

const privacyPolicyData = {
  lastUpdated: "March 15, 2024",
  sections: [
    {
      id: "information",
      title: "1. What do we do with your information?",
      content: `When you register at our website, as part of the verification process, we collect the personal 
      information you give us such as your name and email address.`,
    },
    {
      id: "consent",
      title: "2. Consent",
      content: "How do you get my consent?",
      description: `When you provide us with personal information to complete a registration, verify your identity 
      or request a service, we imply that you consent to our collecting it and using it for that specific reason 
      only. If we ever ask for your personal information for a secondary reason, like marketing, we will either 
      ask you directly for your expressed consent, or provide you with an opportunity to say no.`,
    },
    {
      id: "disclosure",
      title: "3. Disclosure",
      content: `We may disclose your personal information if we are required by law to do so or if you violate 
      our Terms of Service.`,
    },
    {
      id: "database",
      title: "4. Database",
      content: `Our platform database is hosted with an online hosting platform (the Cloud) that allows us to 
      provide services to you. Your data is stored through their data storage services and applications. We store 
      your data on a secure server behind a firewall.`,
    },
    {
      id: "third-party",
      title: "5. Third-party services",
      content: `In general, the third-party providers, if used, will only collect, use and disclose your 
      information to the extent necessary to allow them to perform the services they provide to us.`,
      subsections: [
        {
          title: "Payment processing",
          content: `However, certain third-party service providers, such as payment gateways and other payment 
          transaction processors, have their own privacy policies in respect to the information we are required 
          to provide to them for your purchase-related transactions if payment is ever required.`,
        },
        {
          title: "Provider policies",
          content: `For these providers, we recommend that you read their privacy policies so you can understand 
          the manner in which your personal information will be handled by these providers. In particular, 
          remember that certain providers may be located in or have facilities that are located in a different 
          jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the 
          services of a third-party service provider, then your information may become subject to the laws of 
          the jurisdiction(s) in which that service provider or its facilities are located.`,
        },
        {
          title: "Links",
          content: `When you click on links on our website, they may direct you away from our site. We are not 
          responsible for the privacy practices of other sites and encourage you to read their privacy statements.`,
        },
      ],
    },
    {
      id: "security",
      title: "6. Security",
      content: `To protect your personal information, we take reasonable precautions and follow industry best 
      practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. 
      If you provide us with your personal information, the information is encrypted using secure socket layer 
      technology (SSL) and stored with an encryption. Although no method of transmission over the Internet or 
      electronic storage is 100% secure, we follow all standard security requirements to ensure that your data 
      is protected.`,
    },
    {
      id: "age-consent",
      title: "7. Age of consent",
      content: `By using this site, you represent that you are at least the age of majority in your country, 
      state or province of residence, or that you are the age of majority in your state or province of residence 
      and you have given us your consent to allow any of your minor dependents to use this site.`,
    },
    {
      id: "changes",
      title: "8. Changes to this privacy policy",
      content: `We reserve the right to modify this privacy policy at any time, so please review it frequently. 
      Changes and clarifications will take effect immediately upon their posting on the website. If we make 
      material changes to this policy, we reserve the right not to notify you that it has been updated.`,
    },
  ],
};

export default function PrivacyPolicy() {
  return (
    <LegalSection
      title="Privacy Policy"
      lastUpdated={privacyPolicyData.lastUpdated}
      sections={privacyPolicyData.sections}
    />
  );
}
