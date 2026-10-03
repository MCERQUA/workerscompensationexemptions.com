// Centralized site data — used across nav, footer, schema, CTAs
// Workers Compensation Exemptions — comprehensive guide to WC exemptions across all 50 states

export const SITE = {
  name: "Workers Compensation Exemptions",
  legalName: "Workers Compensation Exemptions (by Contractors Choice Agency)",
  domain: "workerscompensationexemptions.com",
  url: "https://workerscompensationexemptions.com",
  tagline: "Everything About Workers' Comp Exemptions by State",
  description:
    "The comprehensive guide to workers' compensation exemptions across all 50 states — LLC member exemptions, family member exemptions, independent contractor classification, corporate officer rules, and alternative WC solutions. Licensed agency, 20+ years.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Rd, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "WC Exemptions",
  brandSub: "State-by-State Guide",
  nicheShort: "workers comp exemption",
  nicheShortCap: "Workers Comp Exemption",
  nichePlural: "workers comp exemptions",
  nichePluralCap: "Workers Comp Exemptions",
  operator: "business owner",
  operatorCap: "Business Owner",
  industry: "workers compensation",
  industryCap: "Workers Compensation",
  audience: "business owners",
  audienceCap: "Business Owners",
  ownerTitle: "business owner",
  regionPill: "All 50 States · National",
  serviceSuffix: "Workers Comp Exemptions",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "state-exemption-guide",
    title: "State-by-State Exemption Guide",
    short: "Know your state's exact exemption rules",
    description:
      "The definitive resource for workers' comp exemption rules in every state — filing deadlines, eligible parties, renewal requirements, and the key differences between LLC member, corporate officer, family member, and independent contractor rules by state.",
    icon: "Map",
    keywords: ["workers comp exemption by state", "state workers compensation exemption guide", "WC exemption rules by state", "workers comp exemption all 50 states"],
  },
  {
    slug: "llc-member-exemption",
    title: "LLC Member Exemption Rules",
    short: "Single vs. multi-member LLC exemption options",
    description:
      "LLC member workers' comp exemptions vary widely by state — Florida exempts members in non-construction, California limits exemptions to officers, and Texas operates a non-subscriber system. We clarify the rules for single-member and multi-member LLCs in every state.",
    icon: "Building2",
    keywords: ["LLC member workers comp exemption", "LLC workers compensation exemption", "single member LLC workers comp", "multi-member LLC workers comp exemption"],
  },
  {
    slug: "family-member-exemption",
    title: "Family Member Exemptions",
    short: "Spouse, children, and parent exemption rules",
    description:
      "Many states allow family members — spouses, children, and parents — to be excluded from workers' comp in family-owned businesses. The definition of 'family business' and qualifying relationships vary significantly by state.",
    icon: "Users",
    keywords: ["family member workers comp exemption", "spouse workers compensation exemption", "family business workers comp exclusion", "children workers comp exemption"],
  },
  {
    slug: "independent-contractor",
    title: "Independent Contractor Classification",
    short: "IC vs. employee — get the classification right",
    description:
      "Misclassifying employees as independent contractors is one of the most common and costly audit triggers. We break down the ABC test, the economic reality test, California AB5, and how each state determines who is truly an independent contractor.",
    icon: "Briefcase",
    keywords: ["independent contractor workers comp", "IC vs employee workers compensation", "1099 contractor workers comp exemption", "ABC test workers compensation"],
  },
  {
    slug: "corporate-officer-exemption",
    title: "Corporate Officer Exemption",
    short: "Corporate officer exclusion rules by state",
    description:
      "Corporate officers — presidents, vice presidents, secretaries, and treasurers — may elect to be excluded from workers' comp in most states, but the stock ownership requirements and officer count limits vary. Learn your state's rules.",
    icon: "FileText",
    keywords: ["corporate officer workers comp exemption", "officer exclusion workers compensation", "corporate officer WC exclusion", "officer workers comp opt out"],
  },
  {
    slug: "seasonal-worker-rules",
    title: "Seasonal Worker Coverage Rules",
    short: "Seasonal, part-time, and temporary worker rules",
    description:
      "Seasonal and part-time workers create unique workers' comp compliance questions — when coverage is required, how winter layoffs affect policy audits, and whether short-term or H-2A agricultural workers qualify for exemptions.",
    icon: "Calendar",
    keywords: ["seasonal worker workers comp", "seasonal employee workers compensation", "part-time workers comp requirements", "temporary worker workers compensation"],
  },
  {
    slug: "alternative-wc-solutions",
    title: "Alternative WC Solutions",
    short: "Occupational accident, PEOs, and TX non-subscriber",
    description:
      "For businesses that don't qualify for an exemption, alternatives exist — occupational accident insurance, professional employer organizations (PEOs), Texas non-subscriber coverage, and state fund options for hard-to-place risks.",
    icon: "ShieldCheck",
    keywords: ["alternative workers compensation", "occupational accident insurance", "Texas non-subscriber workers comp", "PEO workers compensation"],
  },
  {
    slug: "compliance-audit",
    title: "Exemption Compliance Audit",
    short: "Audit-proof your exemption filings",
    description:
      "A workers' comp exemption can be voided retroactively if filed incorrectly, lapses due to missed renewal, or is challenged by a state auditor. Our compliance audit identifies risks in your exemption filings before an auditor does.",
    icon: "FileSearch",
    keywords: ["workers comp exemption compliance", "WC audit workers compensation", "workers comp exemption audit", "workers compensation compliance audit"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "florida",
    name: "Florida",
    region: "FL",
    blurb: "Florida has one of the highest volumes of workers' comp exemption filings nationally — especially in construction. Corporate officers and LLC members in non-construction industries can file exemptions with the Florida Division of Workers' Compensation. Construction industry exemptions are limited to corporate officers (max 10 per company) and require annual renewal. The state actively audits subcontractor 1099 relationships.",
  },
  {
    slug: "texas",
    name: "Texas",
    region: "TX",
    blurb: "Texas is unique: it is the only state that does not require private employers to carry workers' comp insurance. Employers can 'opt out' and become 'non-subscribers,' but non-subscribers lose key tort defenses and face common-law liability for worker injuries. Most Texas businesses carry occupational accident insurance as an alternative. The Texas Department of Insurance Workers' Compensation Division (TDI-DWC) oversees the system.",
  },
  {
    slug: "california",
    name: "California",
    region: "CA",
    blurb: "California has strict workers' comp requirements and limited exemption options. LLC members cannot exempt themselves unless they qualify as corporate officers. California's AB5 law imposed the ABC test for independent contractor classification, making it harder to classify workers as 1099 contractors. The California Department of Industrial Relations (DIR) actively enforces coverage requirements, and penalties for non-compliance are severe.",
  },
  {
    slug: "new-york",
    name: "New York",
    region: "NY",
    blurb: "New York requires virtually all employers to carry workers' comp, with very limited exemptions. Corporate officers of a corporation can elect to be excluded, and sole proprietors and partnerships are exempt. The New York Workers' Compensation Board processes exemption filings. Construction industry workers face especially strict rules, and out-of-state workers performing work in New York must be covered by New York workers' comp.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    region: "GA",
    blurb: "Georgia requires workers' comp for employers with three or more employees. Sole proprietors and partners are automatically excluded but can elect to be covered. LLC members are treated like partners and are typically excluded from mandatory coverage. Georgia allows corporate officers to be excluded with proper filing. Subcontractor compliance is a major audit area for construction and landscaping businesses.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    region: "AZ",
    blurb: "Arizona requires workers' comp for all employers with one or more employees. Corporate officers of a corporation may be excluded if they own at least 10% of the corporation's stock. LLC members may also be excluded. The Industrial Commission of Arizona (ICA) enforces coverage. Arizona construction companies face heightened scrutiny on subcontractor classification and exemption eligibility.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    region: "IL",
    blurb: "Illinois has strict workers' comp requirements with limited exemptions. Sole proprietors and business partners are excluded but may elect coverage. Corporate officers can be excluded under certain conditions. Illinois law imposes strict rules on subcontractor coverage — if a subcontractor does not carry workers' comp, the general contractor can be held liable. Family business exemptions are narrow.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    region: "NC",
    blurb: "North Carolina requires workers' comp for employers with three or more employees. Sole proprietors and partners are exempt but may elect coverage. LLC members are typically excluded. The North Carolina Industrial Commission (NCIC) and North Carolina Rate Bureau (NCLB) oversee the system. Construction subcontractors face significant exemption challenges, and misclassification of workers is a growing enforcement priority.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Exemption-knowledgeable agents", icon: "BookOpen" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 50, suffix: "", label: "States covered with exemption guides", prefix: "" },
  { value: 20, suffix: "+", label: "Years helping businesses navigate WC", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 2500, suffix: "+", label: "Businesses helped with WC solutions", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "As an LLC member in California, I had no idea I could be personally liable for an injured worker's medical bills if I didn't have coverage. The state-by-state guide helped me understand AB5 and why my 1099 subcontractors needed to be reclassified. Saved me from a serious audit exposure.",
    name: "Marcus T.",
    role: "LLC Member",
    location: "California",
  },
  {
    quote: "We're a family business in Texas with my spouse and two adult children working with me. I assumed family members were automatically exempt. Wrong — Texas non-subscriber rules meant we needed occupational accident coverage. The guide spelled it out clearly and we got the right coverage in place.",
    name: "Sandra R.",
    role: "Business Owner",
    location: "Texas",
  },
  {
    quote: "I'm a corporate officer of a small construction company in Florida. I had filed my exemption years ago and didn't realize it needed annual renewal. My exemption had lapsed. When an auditor showed up, the compliance audit service flagged the gap before it became a penalty. Excellent resource.",
    name: "Dave K.",
    role: "Corporate Officer",
    location: "Florida",
  },
] as const;
