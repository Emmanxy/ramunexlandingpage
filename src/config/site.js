export const siteConfig = {
  company: {
    name: "Ramunex Technologies",
    shortName: "RAMUNEX",
    domain: "https://ramunextechnologies.co.za",
    tagline: "We Engineer Technology.",
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "",
  },
  products: [
    {
      name: "Rapply",
      description: import.meta.env.VITE_RAPPLY_DESCRIPTION || "",
      url: import.meta.env.VITE_RAPPLY_URL || "",
    },
  ],
  work: [
    {
      name: "Edu-Ca-Te",
      subtitle: "Grade 10–12 CAPS Learning Platform",
      sector: "South African education",
      description: "A learning platform serving thousands of South African learners.",
      url: "https://www.edu-ca-te.co.za/",
    },
  ],
};
