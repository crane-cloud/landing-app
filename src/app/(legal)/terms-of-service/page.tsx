import LegalSection from "@/components/common/LegalSection";

const termsOfServiceData = {
  lastUpdated: "May 1, 2021",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `CraneCloud.io provides the www.cranecloud.io platform, website and various related services to you, 
      the User, subject to your compliance with all the terms, conditions, and notices contained or referenced 
      herein the "Terms of Service", as well as any other written agreement between us and you.`,
      description: `In addition, when using particular services or materials on this Website, Users shall be subject 
      to any posted rules applicable to such services or materials that may contain terms and conditions in addition 
      to those in these Terms of Service. All such guidelines or rules are hereby incorporated by reference into 
      these Terms of Service.`,
    },
    {
      id: "effective-date",
      title: "2. Effective date and modifications",
      content: `These Terms of Service are effective as of 1st May 2021. We expressly reserve the right to change 
      these Terms of Service from time to time without notice to you. You acknowledge and agree that it is your 
      responsibility to review this Platform/Website and these Terms of Service from time to time and to familiarize 
      yourself with any modifications.`,
      description: `Your continued use of this Platform/Website after such modifications will constitute acknowledgement 
      of the modified Terms of Service and agreement to abide and be bound by the modified Terms of Service.`,
    },
    {
      id: "website-modifications",
      title: "3. Website modifications",
      content: `We reserve the sole right to either modify or discontinue the Website, including any of the Website's 
      features, at any time with or without notice to you. We will not be liable to you or any third party should 
      we exercise such right. Any new features that augment or enhance the then-current services on this Website 
      shall also be subject to these Terms of Service.`,
    },
    {
      id: "conduct",
      title: "4. Conduct on website",
      content: `Your use of the Website is subject to all applicable laws and regulations, and you are solely 
      responsible for the substance of your communications through the Website. By posting information in or 
      otherwise using any communications service, chat room, message board, newsgroup, software library, or other 
      interactive service that may be available to you on or through this Website, you agree that you will not 
      upload, share, post, or otherwise distribute or facilitate distribution of any content — including text, 
      communications, software, images, sounds, data, or other information — that:`,
      listItems: [
        "Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts, or otherwise violates our rules or policies",
        "Victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability",
        "Infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party",
        "Constitutes unauthorized or unsolicited advertising, junk or bulk email, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling",
        "Contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment",
        "Impersonates any person or entity, including any of our employees or representatives",
      ],
    },
    {
      id: "third-party",
      title: "5. Third party websites",
      content: `This site may link you to other sites on the Internet or otherwise include references to information, 
      documents, software, materials and/or services provided by other parties. These sites may contain information 
      or material that some people may find inappropriate or offensive.`,
      description: `These other sites and parties are not under our control, and you acknowledge that we are not 
      responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content 
      of such sites, nor are we responsible for errors or omissions in any references to other parties or their 
      products and services.`,
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual property",
      content: `All custom graphics, icons, logos, and service names used on the Website are registered trademarks, 
      service marks, and/or artwork held under copyright of CraneCloud.io or its Affiliates. All other marks are 
      property of their respective owners. Nothing in these Terms of Service grants you any right to use any 
      trademark, service mark, logo, and/or the name or trade names of CraneCloud.io or its Affiliates.`,
    },
    {
      id: "disclaimer",
      title: "7. Disclaimer of warranties",
      content: `Content available through this Website often represents the opinions and judgments of an information 
      provider, site user, or other person or entity not connected with us. We do not endorse, nor are we responsible 
      for the accuracy or reliability of, any opinion, advice, or statement made by anyone other than an authorized 
      CraneCloud.io support staff speaking in his/her official capacity.`,
      description: `You understand and agree that temporary interruptions of the services available through this 
      Website may occur as normal events. You further understand and agree that we have no control over third party 
      networks you may access in the course of the use of this Website, and therefore, delays and disruption of 
      other network transmissions are completely beyond our control.`,
    },
    {
      id: "international",
      title: "8. International use",
      content: `Although this Website may be accessible worldwide, we make no representation that materials on this 
      Website are appropriate or available for use in locations outside Uganda, and accessing them from territories 
      where their contents are illegal is prohibited. Those who choose to access this Website from other locations 
      do so on their own initiative and are responsible for compliance with local laws.`,
    },
    {
      id: "termination",
      title: "9. Termination",
      content: `You agree that we may, in our sole discretion, terminate or suspend your access to all or part of 
      the Website with or without notice and for any reason, including, without limitation, breach of these Terms 
      of Service. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your 
      relationship and may be referred to appropriate law enforcement authorities.`,
    },
    {
      id: "governing-law",
      title: "10. Governing law",
      content: `These Terms of Service and any dispute or claim arising out of, or related to them, shall be 
      governed by and construed in accordance with the internal laws of Uganda without giving effect to any choice 
      or conflict of law provision or rule. Any legal suit, action or proceeding arising out of, or related to, 
      these Terms of Service or the Website shall be instituted exclusively in the courts of Uganda.`,
    },
  ],
};

export default function TermsOfService() {
  return (
    <LegalSection
      title="Terms of Service"
      lastUpdated={termsOfServiceData.lastUpdated}
      sections={termsOfServiceData.sections}
    />
  );
}
