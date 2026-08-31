export type RoleProfile = {
  id: string;
  name: string;
  role: string;
  image: string;
  accent: string;
  accent2: string;
  domain: string;
  proof: string[];
  capabilities: string[];
  lens: string;
  motion: "neural" | "data" | "cloud" | "security" | "code" | "strategy" | "creative" | "medical" | "civic" | "diplomacy" | "service" | "finance" | "legal" | "sales";
};

const motionByRole: Record<string, RoleProfile["motion"]> = {
  "ai-ml": "neural", "data-scientist": "data", cloud: "cloud", cyber: "security", software: "code",
  product: "strategy", designer: "creative", devops: "cloud", fullstack: "code", analyst: "data",
  "investment-banker": "finance", "chartered-accountant": "finance", "management-consultant": "strategy",
  "corporate-lawyer": "legal", surgeon: "medical", "general-doctor": "medical", "ias-officer": "civic",
  "ips-officer": "security", "ifs-officer": "diplomacy", "digital-marketing-manager": "creative",
  "brand-manager": "creative", "growth-marketing-manager": "data", "creative-director": "creative",
  "customer-support-executive": "service", "technical-support-engineer": "code",
  "customer-success-manager": "service", "help-desk-analyst": "service", "client-relationship-manager": "service",
  "financial-analyst": "finance", "financial-controller": "finance", "risk-manager": "security",
  "seo-content-marketing-specialist": "data", "social-media-manager": "creative",
  "business-development-manager": "sales", "sales-manager": "sales", "key-account-manager": "sales",
  "sales-executive": "sales", "regional-sales-head": "sales"
};

const roleRows: Array<[string, string, string, string, string, string, string, string[]]> = [
  ["ai-ml","Maya Patel","AI / ML Engineer","ai-ml.png","#36d9ff","#6e78ff","Intelligence systems",["Model craft","Responsible AI","Production MLOps","Decision systems"]],
  ["data-scientist","Noah Kim","Data Scientist","data-scientist.png","#22c8a3","#8d62ed","Decision science",["Experiment design","Forecasting","Causal analysis","Data stories"]],
  ["cloud","Priya Nair","Cloud Architect","cloud.png","#ffac55","#459cff","Cloud platforms",["Resilient architecture","Platform strategy","Cost engineering","Secure migration"]],
  ["cyber","Daniel Okoro","Cybersecurity Specialist","cyber.png","#5bea94","#ff5d70","Security operations",["Threat modeling","Detection engineering","Incident response","Risk communication"]],
  ["software","Elena Rossi","Software Developer","software.png","#c193ff","#6aedac","Product engineering",["System design","Frontend craft","Reliable APIs","Team velocity"]],
  ["product","Alex Morgan","Product Manager","product.png","#ff7865","#356179","Product strategy",["Problem framing","Roadmaps","Discovery","Outcome design"]],
  ["designer","Isha Mehta","UX / Product Designer","designer.png","#ef86be","#7da9ff","Experience design",["Research synthesis","Interaction design","Prototyping","Design systems"]],
  ["devops","Ethan Cole","DevOps Engineer","devops.png","#52e5d4","#c3f05d","Delivery systems",["Release automation","Observability","Infrastructure","Developer experience"]],
  ["fullstack","Sofia Almeida","Full-Stack Developer","fullstack.png","#b18bff","#42dbbd","Digital products",["End-to-end delivery","APIs","Interfaces","Performance"]],
  ["analyst","Rohan Gupta","Data Analyst","analyst.png","#4a86ff","#f5ba42","Business intelligence",["Metric design","Dashboards","Operational insight","Storytelling"]],
  ["investment-banker","Aarav Shah","Investment Banker","investment-banker.png","#e4b05c","#6b7cff","Capital advisory",["Valuation","Transaction execution","Financial modeling","Client judgment"]],
  ["chartered-accountant","Ananya Rao","Chartered Accountant","chartered-accountant.png","#5cd6c3","#e4b05c","Financial stewardship",["Audit quality","Tax strategy","Controls","Reporting"]],
  ["management-consultant","Vikram Menon","Management Consultant","management-consultant.png","#8caeff","#d7a4ff","Transformation",["Operating models","Market strategy","Change leadership","Executive alignment"]],
  ["corporate-lawyer","Naina Kapoor","Corporate Lawyer","corporate-lawyer.png","#c59cff","#e4b05c","Corporate counsel",["Commercial law","Negotiation","Governance","Risk clarity"]],
  ["surgeon","Arjun Iyer","Surgeon / Medical Specialist","surgeon.png","#64e0d0","#73a8ff","Clinical precision",["Patient safety","Procedural excellence","Care coordination","Clinical leadership"]],
  ["general-doctor","Meera Thomas","Doctor (General / MBBS)","general-doctor.png","#6cb7ff","#82e6a5","Primary care",["Preventive medicine","Diagnosis","Patient education","Continuity of care"]],
  ["ias-officer","Kavya Singh","IAS Officer","ias-officer.png","#e1b160","#9bb6ff","Public administration",["Policy execution","Public service","Programme delivery","Stakeholder trust"]],
  ["ips-officer","Aditya Verma","IPS Officer","ips-officer.png","#6be2ab","#64a5ff","Public safety",["Operational command","Community safety","Crisis response","Institution building"]],
  ["ifs-officer","Rhea Banerjee","IFS Officer","ifs-officer.png","#82aafc","#e6bb73","Diplomacy",["Negotiation","International relations","Strategic communication","Cultural fluency"]],
  ["digital-marketing-manager","Zoya Khan","Digital Marketing Manager","digital-marketing-manager.png","#fa7aa6","#8f8cff","Digital growth",["Campaign strategy","Channel performance","Conversion","Audience insight"]],
  ["brand-manager","Ishaan Malhotra","Brand Manager","brand-manager.png","#efa56f","#ba79ff","Brand leadership",["Positioning","Portfolio strategy","Brand systems","Consumer insight"]],
  ["growth-marketing-manager","Sara Joseph","Growth Marketing Manager","growth-marketing-manager.png","#69dfba","#82a8ff","Growth strategy",["Lifecycle growth","Experimentation","Funnel design","Retention"]],
  ["creative-director","Kabir Sethi","Creative Director","creative-director.png","#d48bf0","#f3a36c","Creative direction",["Visual worlds","Campaign direction","Narrative craft","Creative teams"]],
  ["customer-support-executive","Nisha Das","Customer Support Executive","customer-support-executive.png","#64ddec","#7f90ff","Customer care",["Issue resolution","Empathy","Knowledge systems","Service quality"]],
  ["technical-support-engineer","Owen Park","Technical Support Engineer","technical-support-engineer.png","#e4b05c","#6b7cff","Technical support",["Troubleshooting","System diagnosis","Customer communication","Escalation craft"]],
  ["customer-success-manager","Fatima Ali","Customer Success Manager","customer-success-manager.png","#5cd6c3","#e4b05c","Customer outcomes",["Adoption","Account strategy","Value realization","Executive partnership"]],
  ["help-desk-analyst","Liam Carter","Help Desk Analyst","help-desk-analyst.png","#8caeff","#d7a4ff","Service operations",["Ticket intelligence","Workflow design","Device support","Knowledge bases"]],
  ["client-relationship-manager","Amara Bose","Client Relationship Manager","client-relationship-manager.png","#c59cff","#e4b05c","Client partnerships",["Trust building","Account strategy","Relationship health","Business reviews"]],
  ["financial-analyst","Neel Desai","Financial Analyst","financial-analyst.png","#64e0d0","#73a8ff","Financial insight",["Scenario modeling","Planning","Performance analysis","Investment judgment"]],
  ["financial-controller","Grace Lin","Financial Controller","financial-controller.png","#6cb7ff","#82e6a5","Financial control",["Close excellence","Controls","Cash stewardship","Leadership reporting"]],
  ["risk-manager","Diego Silva","Risk Manager","risk-manager.png","#e1b160","#9bb6ff","Enterprise resilience",["Risk frameworks","Controls testing","Governance","Response planning"]],
  ["seo-content-marketing-specialist","Aditi Sen","SEO / Content Marketing Specialist","seo-content-marketing-specialist.png","#6be2ab","#64a5ff","Organic growth",["Search strategy","Editorial systems","Content performance","Audience intent"]],
  ["social-media-manager","Milan Roy","Social Media Manager","social-media-manager.png","#82aafc","#e6bb73","Community growth",["Social strategy","Audience voice","Creative programming","Community insight"]],
  ["business-development-manager","Leena Roy","Business Development Manager","business-development-manager.png","#fa7aa6","#8f8cff","New business",["Partnership strategy","Pipeline design","Negotiation","Market expansion"]],
  ["sales-manager","Rahul Nair","Sales Manager","sales-manager.png","#efa56f","#ba79ff","Revenue leadership",["Team coaching","Pipeline health","Deal strategy","Forecasting"]],
  ["key-account-manager","Tara Khanna","Key Account Manager","key-account-manager.png","#69dfba","#82a8ff","Account growth",["Strategic accounts","Renewals","Executive alignment","Expansion"]],
  ["sales-executive","Yash Batra","Sales Executive","sales-executive.png","#d48bf0","#f3a36c","Commercial execution",["Prospecting","Discovery","Negotiation","Closing"]],
  ["regional-sales-head","Devika Rao","Regional Sales Head","regional-sales-head.png","#64ddec","#7f90ff","Regional growth",["Go-to-market","Regional leadership","Sales operations","Partner ecosystems"]]
];

export const roles: Record<string, RoleProfile> = Object.fromEntries(roleRows.map(([id, name, role, image, accent, accent2, domain, capabilities]) => [id, {
  id, name, role, image, accent, accent2, domain, capabilities,
  motion: motionByRole[id],
  proof: [
    `${capabilities[0]} under pressure`,
    `${capabilities[1]} across stakeholders`,
    `${capabilities[2]} made measurable`,
    `${capabilities[3]} transferred to the team`
  ],
  lens: `I turn complex ${domain.toLowerCase()} conditions into work teams can understand, execute, and improve.`
}]));
