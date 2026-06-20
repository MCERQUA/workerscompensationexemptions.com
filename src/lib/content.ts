// Rich, niche-accurate content blocks + centralized COPY for Workers Compensation Exemptions.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Users, Briefcase, FileText, Calendar, Map, BookOpen,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Workers' comp exemptions, explained",
    h1Highlight: "for every state, every business type",
    subcopy:
      "LLC member exemptions, family member exclusions, independent contractor classification, corporate officer rules, and alternative WC solutions — the comprehensive guide for all 50 states. Licensed agency. 20+ years. 15-minute quotes.",
    statValue: "2,500+",
    statLabel: "Businesses helped navigate workers' comp exemptions across all 50 states",
    imageAlt: "Insurance consultant reviewing workers compensation exemption documents with a business owner",
  },
  nav: { ariaLabel: "Workers Compensation Exemptions home" },
  footer: {
    ctaTitle: "Ready to sort out your WC exemption?",
    ctaSubcopy: "15-minute quotes. 2-hour claims response. Workers' comp exemption guidance nationwide.",
    description:
      "The comprehensive guide to workers' compensation exemptions across all 50 states — LLC member exemptions, family member exclusions, independent contractor classification, corporate officer rules, and alternative WC solutions. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Everything about",
    h2Highlight: "workers' comp exemptions",
    lead: "Workers' comp exemption rules differ dramatically by state, business type, and relationship. We decode every scenario — from LLC member exemptions to Texas non-subscriber — so you stay compliant and covered correctly.",
  },
  why: {
    eyebrow: "Why businesses come to us",
    h2Lead: "The WC exemption mistakes that",
    h2Highlight: "cost businesses the most",
    lead: "Most business owners assume they understand their workers' comp obligations — until an auditor shows up or a worker gets hurt. A voided exemption, a missed renewal, or a misclassified contractor can mean retroactive penalties and uncovered injuries.",
    sidebarTitle: "Run by people who know the rules",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 and has helped thousands of business owners navigate the complex, state-by-state world of workers' comp exemptions — from LLC member filings in Florida to Texas non-subscriber alternatives.",
  },
  coverage: {
    eyebrow: "Where we work",
    h2Lead: "Workers' comp exemption guidance.",
    h2Highlight: "All 50 states.",
    lead: "From Florida's construction exemption rules to California's AB5 contractor classification and Texas's unique non-subscriber system, Contractors Choice Agency guides business owners through WC exemptions in every state.",
    imageAlt: "Insurance professional consulting with a business owner on workers compensation exemption options",
    badgeTitle: "National WC exemption expertise.",
    badgeSub: "Helping businesses in all 50 states since 2005.",
  },
  process: {
    lead: "No two-week back-and-forth. A real conversation, a clear answer on your exemption options, and a program that keeps you compliant — built around your business structure and state.",
  },
  testimonials: {
    eyebrow: "From business owners",
    h2Lead: "Businesses that figured out",
    h2Highlight: "their WC exemption correctly",
  },
  finalCta: {
    h2Lead: "Get your WC Exemption Right",
    h2Highlight: "with guidance built for your state.",
    lead: "Whether you need to file an LLC member exemption today or want a full compliance review — one call gets you real answers on your state's rules and, if you need coverage, real quotes from specialty markets. Not a voicemail and a two-week wait.",
  },
  ctaBand: {
    defaultTitle: "Ready to sort out your WC exemption?",
    defaultDescription:
      "Get guidance on workers' comp exemptions in your state — LLC member, family member, corporate officer, independent contractor, or alternative coverage. 15-minute response.",
  },
  faq: {
    defaultTitleLead: "Workers' comp exemptions,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Workers' Comp Exemption Services & Guides",
    metaDescription:
      "Eight essential guides to workers' compensation exemptions: state-by-state guide, LLC member rules, family member exemptions, independent contractor classification, corporate officer exclusion, seasonal worker rules, alternative WC solutions, and compliance audit. Licensed all 50 states.",
    h1Lead: "Every workers' comp exemption scenario,",
    h1Highlight: "explained by state",
    lead: "Each guide below addresses a specific workers' comp exemption scenario — from the LLC member filing deadlines a Florida contractor needs to the AB5 reclassification risk a California business owner must understand.",
    ogTitle: "Workers' Comp Exemption Services | Contractors Choice Agency",
    ogDescription:
      "State-by-state guide, LLC member exemptions, family member exclusions, independent contractor classification, corporate officer rules, seasonal worker coverage, alternative WC solutions, and compliance audits.",
    ctaTitle: "Not sure which exemption applies to you?",
    ctaDescription:
      "Most business owners benefit from a quick exemption review before filing — we identify the right path for your state, business structure, and worker relationships.",
  },
  blogPage: {
    metaTitle: "Workers' Comp Exemption Blog — Guides & State Rules",
    metaDescription:
      "Practical guides to workers' compensation exemptions: LLC member exemptions by state, independent contractor classification, family member exclusions, Texas non-subscriber rules, and compliance audit checklists.",
    h1Lead: "Workers' comp exemptions,",
    h1Highlight: "decoded by state",
    lead: "Plain-English guides on exemption rules that matter — LLC member filings, independent contractor classification, family business exclusions, Texas non-subscriber alternatives, and audit compliance.",
    ogTitle: "Workers' Comp Exemption Blog | Contractors Choice Agency",
    ogDescription:
      "Practical guides to workers' compensation exemptions: LLC member exemptions by state, independent contractor classification, family member exclusions, Texas non-subscriber rules, and compliance audits.",
  },
  serviceDetail: {
    h1Suffix: "— Workers' Comp Exemption Guide",
    imageAltSuffix: "workers compensation exemption",
    category: "Workers' Comp Exemption",
  },
  about: {
    metaTitle: "About Workers Compensation Exemptions | Contractors Choice Agency",
    metaDescription:
      "Workers Compensation Exemptions is the WC-exemption-focused division of Contractors Choice Agency, founded in 2005. LLC member exemptions, corporate officer exclusions, family member rules, independent contractor classification, and alternative WC solutions. Licensed all 50 states.",
    h1Lead: "Built by people who know the rules,",
    h1Highlight: "for business owners navigating WC",
    lead: "Workers Compensation Exemptions is the WC-exemption-focused division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when a voided exemption or a misclassified contractor shows up in an audit finding.",
    imageAlt: "A knowledgeable insurance professional with state compliance guides in a professional office",
    storyEyebrow: "Our story",
    storyTitle: "From the trades to the agency.",
    storyLead:
      "Josh Cotner ran operations, read compliance specs, and filed certificates before founding CCA in 2005. That background is why we understand what's at stake when a business owner's exemption lapses, a worker gets hurt, and the state auditor finds a gap.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ — built to help contractors, business owners, and operators navigate complex insurance and compliance requirements correctly." },
      { year: "15 yrs", title: "Expanded to WC exemption guidance", desc: "After helping thousands of businesses with coverage placement, CCA develops specialized expertise in workers' comp exemptions, classifications, and state-by-state compliance." },
      { year: "Today", title: "Dedicated WC exemption division", desc: "Workers Compensation Exemptions focuses CCA's expertise on business owners navigating LLC member exemptions, family exclusions, IC classification, and alternative WC solutions." },
    ],
    values: [
      { icon: "BookOpen", title: "Operator-first, always", desc: "Josh spent years working in the trades before starting the agency. We speak the language of business owners because we know what happens when a compliance gap surfaces at the worst time." },
      { icon: "ShieldCheck", title: "Guidance that closes the gaps", desc: "Voided exemptions, misclassified contractors, missed renewals — we address the WC compliance risks that standard agents miss because they don't specialize." },
      { icon: "Award", title: "A-rated markets only", desc: "When you do need workers' comp or an alternative — occupational accident, PEO — we place coverage with carriers that have the financial strength to pay claims." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you qualify for an exemption, we'll tell you exactly how to file it. We earn trust by being straight about what your business actually requires." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "WC exemption question answered",
    lead: "Tell us about your business structure and state. We'll clarify your exemption options and, if you need coverage, shop A-rated specialty markets and come back with real quotes in about 15 minutes.",
    businessPlaceholder: "Apex Construction LLC",
    emailPlaceholder: "owner@apexconstruction.com",
    phonePlaceholder: "(602) 555-0100",
    messagePlaceholder:
      "Business type, state, number of owners/officers, family members working in the business, 1099 subcontractors used, current WC situation, and anything else that helps us understand your exemption question or coverage need…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for WC exemptions",
    trustNicheDesc: "Guidance and policies structured around your state's actual exemption rules.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "WC exemption situation",
    lead: "Questions, a quote, or a compliance concern — reach a person who knows workers' comp exemptions by state, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Workers' Comp Exemption Guidance — All 50 States",
    metaDescription:
      "Contractors Choice Agency provides workers' comp exemption guidance in all 50 states — Florida, Texas, California, New York, Georgia, Arizona, Illinois, North Carolina, and every state in between.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every exemption scenario.",
    lead: "Contractors Choice Agency guides business owners through workers' comp exemptions in all 50 states — from Florida's construction filing rules to Texas's non-subscriber system and California's AB5 restrictions.",
    sectionTitle: "Key exemption states we cover.",
    nationwideLead:
      "Whether your business is in Florida, Texas, California, New York, or anywhere in between — one call covers your state's rules on LLC member exemptions, corporate officer exclusions, family member rules, and independent contractor classification. NPN #8608479.",
    faqs: [
      { q: "Do you only cover WC exemptions in certain states?", a: "No. Contractors Choice Agency is licensed in all 50 states and provides workers' comp exemption guidance for businesses anywhere in the country — Florida, Texas, California, New York, Georgia, Arizona, Illinois, North Carolina, and every other state." },
      { q: "Can you help with multi-state operations?", a: "Yes. We structure programs so your workers' comp compliance, exemptions, and alternative coverage coordinate across state lines without gaps — important for businesses with employees or subcontractors in multiple states." },
      { q: "Do you understand my specific state's exemption rules?", a: "Yes. We work with specialists who understand regional differences — Florida's construction exemption filing requirements, Texas's non-subscriber system, California's AB5 restrictions on IC classification, and New York's strict construction rules." },
      { q: "Can you help coordinate coverage for businesses that use subcontractors across states?", a: "Yes. If you use subcontractors in multiple states, we help you understand which states require certificate of insurance verification, which allow IC exclusions, and how to structure your program to avoid general contractor liability for uninsured subs." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your business", description: "15-min call or form. Business structure, state, owner count, family members working in the business, subcontractors used, and your current WC situation." },
  { step: "02", icon: FileSearch, title: "We research your state's rules", description: "Exemption eligibility by state, filing requirements, renewal deadlines, and the specific rules for LLC members, corporate officers, family members, or independent contractors." },
  { step: "03", icon: FileSignature, title: "File or bind the right solution", description: "Exemption filing guidance, alternative coverage placement (occupational accident, PEO, state fund), or a full WC program — coordinated so there are no gaps in your compliance." },
  { step: "04", icon: ShieldCheck, title: "Ongoing compliance support", description: "Renewal reminders, audit support, and guidance when your business structure changes — because an exemption that lapses is as bad as never having filed it." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "State-by-state exemption expertise", description: "Workers' comp exemption rules differ by state, business type, and relationship. We specialize in knowing exactly which rules apply to your LLC, corporation, or family business in your state." },
  { icon: Map, title: "All 50 states covered", description: "From Florida's annual construction exemption renewals to Texas non-subscriber options and California's AB5 contractor classification rules — we cover every state's exemption landscape." },
  { icon: BookOpen, title: "We explain it in plain English", description: "Most business owners have no idea what 'ABC test,' 'non-subscriber,' or 'officer exclusion election' means. We translate the rules into actionable steps for your situation." },
  { icon: Building2, title: "LLC and corporate structure specialists", description: "Single-member LLCs, multi-member LLCs, S-corps, C-corps, sole proprietors — the exemption rules differ for each entity type. We know every permutation." },
  { icon: Briefcase, title: "We handle the hard IC classifications", description: "Misclassified a 1099 contractor? Received an audit notice? We help you assess your classification risk, understand the ABC test in your state, and remediate before penalties hit." },
  { icon: Users, title: "Run by a founder who knows business operations", description: "Josh Cotner knows how businesses run and what happens when a compliance gap surfaces at the worst time — during an audit or after a worker injury." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "What is a workers' comp exemption?", a: "A workers' comp exemption allows certain business owners, officers, family members, or contractors to be excluded from a workers' comp policy. Exemptions are filed with the state and, when approved, mean the exempt person is not covered by the policy and the employer is not required to pay premium for them. Rules vary significantly by state." },
  { q: "Can LLC members exempt themselves from workers' comp?", a: "It depends on your state. Florida allows LLC members in non-construction industries to file exemptions. California does not allow LLC members to exempt themselves unless they qualify as corporate officers of a C-corp or S-corp. Texas doesn't require any employer to carry workers' comp. Each state has different LLC member exemption rules, which is why a state-by-state guide is essential." },
  { q: "Is the LLC member exemption different in Florida vs. Texas vs. California?", a: "Yes, dramatically. In Florida, LLC members in non-construction can file exemptions capped at 10 members per company, with annual renewal required. Texas doesn't mandate workers' comp at all — employers can opt out. In California, LLC members generally cannot exempt themselves; the state applies strict coverage rules. Understanding these differences is critical before filing anything." },
  { q: "Can family members be exempt from workers' comp?", a: "Many states allow family members — spouses, children, and parents of the business owner — to be excluded from workers' comp coverage in family-owned businesses. The definition of 'family business' and which relationships qualify vary by state. Some states exempt all immediate family; others have narrow definitions. Working family members who are injured and not covered have no workers' comp claim — which can create significant personal liability." },
  { q: "What payroll exemptions apply to family members on payroll?", a: "Many states automatically exclude certain family members from workers' comp payroll — sole proprietors and their spouses and children in family businesses are often excluded in states like Georgia, North Carolina, and Arizona. However, if a family member is injured and not covered, the business owner faces personal liability for medical bills and lost wages. Many business owners choose to add family members to coverage for protection." },
  { q: "What does 'independent contractor' mean for workers' comp purposes?", a: "For workers' comp, an independent contractor is a worker who is not an employee and therefore not covered by the business's workers' comp policy. However, each state has its own test to determine whether someone is truly an independent contractor or is misclassified. Many workers labeled as '1099 contractors' are reclassified as employees during audits, which can result in retroactive premium assessments and penalties." },
  { q: "What is the ABC test for independent contractor classification?", a: "The ABC test is used in many states (including California under AB5, New Jersey, and Massachusetts) to determine whether a worker is an employee or independent contractor for workers' comp purposes. A worker must satisfy all three criteria: (A) they are free from control of the hiring party, (B) they perform work outside the usual course of the hiring business, and (C) they are engaged in an independently established trade or business. Failing any criterion means the worker is treated as an employee." },
  { q: "How does California's AB5 law affect workers' comp exemptions?", a: "AB5 codified the ABC test for California, making it much harder to classify workers as independent contractors. Under AB5, a worker is presumed to be an employee unless all three parts of the ABC test are satisfied. This means many California businesses that previously used 1099 contractors now must reclassify them as employees and provide workers' comp coverage. Exemptions apply to certain professions and industries, but they are limited." },
  { q: "How do I challenge a workers' comp misclassification finding?", a: "If a state auditor determines that your independent contractors should have been classified as employees, you have the right to challenge the finding. You'll need to document the contractor's independence — separate business, multiple clients, control over how work is performed. An experienced advisor can help you gather the evidence for an appeal, negotiate with the auditor, and, if necessary, represent you through the formal challenge process." },
  { q: "How do seasonal worker layoffs affect workers' comp during winter?", a: "Seasonal businesses often have significant payroll fluctuations, which affects workers' comp audits. If workers are laid off during winter but return in spring, you need to document the seasonal pattern clearly. Workers who return to work after a layoff are still employees — they are not independent contractors during the off-season. Workers' comp policies are audited based on actual payroll, so seasonal payroll documentation is critical to avoid premium disputes." },
  { q: "Are domestic workers exempt from workers' comp?", a: "Most states exclude domestic workers (housekeepers, nannies, household employees) from mandatory workers' comp requirements, particularly for small household employers. However, many states set thresholds — if a household employee works more than a certain number of hours per week or earns above a certain amount, coverage may be required. California, New York, and Illinois have specific domestic worker protection laws that may require coverage." },
  { q: "Are agricultural workers exempt from workers' comp?", a: "Agricultural worker coverage rules vary widely by state. Some states exclude farm workers from workers' comp requirements entirely; others exclude small farms (under a certain number of employees or payroll); and a growing number of states are extending coverage to agricultural workers. California, New York, and Washington provide strong agricultural worker coverage. Farms using H-2A temporary agricultural workers have specific federal requirements as well." },
  { q: "Is there a part-time threshold for workers' comp requirements?", a: "Workers' comp requirements generally apply regardless of whether a worker is full-time or part-time. A part-time employee who works one hour per week is still an employee for workers' comp purposes in most states. A few states set minimum employee-count thresholds (Georgia and North Carolina require coverage at 3 or more employees), but 'part-time' status alone does not create an exemption." },
  { q: "What stock ownership percentage does a corporate officer need to be exempt?", a: "Stock ownership requirements for corporate officer exemptions vary by state. Arizona requires at least 10% stock ownership. Florida requires at least 10% ownership and limits exemptions to officers in specific roles. Many states have no stock ownership requirement but limit the total number of officers who can be excluded. Some states allow any officer to elect exemption regardless of stock ownership. Check your state's specific rules before filing." },
  { q: "What is the difference between a workers' comp exemption and the Texas opt-out system?", a: "A workers' comp exemption removes a specific person (an officer, LLC member, or family member) from an employer's existing workers' comp policy. The employer still has a policy covering other employees. Texas opt-out (non-subscriber) means the employer has no workers' comp insurance at all — for any workers. Texas non-subscribers lose statutory protections against employee lawsuits and face common-law liability, but they are not required to carry the coverage." },
  { q: "What happens if a worker is injured while the exemption is in effect?", a: "If an exempt person (a corporate officer, LLC member, or family member who filed an exemption) is injured on the job, they are not covered by workers' comp. Their medical bills, lost wages, and rehabilitation are not covered by the policy. They would need to pursue other coverage (health insurance, disability insurance, occupational accident insurance) or file a personal injury lawsuit against the business, which could be costly for both parties." },
  { q: "When is a workers' comp exemption voided?", a: "An exemption can be voided if: (1) it was not filed correctly or with the required documentation, (2) the renewal deadline was missed (many states require annual renewal), (3) the business structure changed (LLC converts to corporation, officer ownership percentage changes), (4) the state determines the person was misclassified as exempt, or (5) the exemption was filed for someone who didn't qualify. A voided exemption can be applied retroactively, creating premium liability for the uncovered period." },
  { q: "What are the annual renewal requirements for workers' comp exemptions?", a: "Many states require annual renewal of workers' comp exemptions. Florida is a prominent example — construction industry exemptions must be renewed every two years, and the Division of Workers' Compensation sends renewal notices. Missing the renewal means the exemption lapses, and the person becomes an employee subject to workers' comp requirements. Businesses with multiple officers need a tracking system for each exemption's renewal date." },
  { q: "How do multi-state operations affect workers' comp exemptions?", a: "Multi-state operations create complexity because workers' comp is state-regulated. An LLC member exempt in Florida is not exempt in New York just because they filed a Florida exemption. If a business operates in multiple states, it needs to understand each state's rules and may need to file separate exemptions in each state where officers or members perform work. Workers temporarily sent to another state may be covered under the home state's policy, but this depends on the states involved." },
  { q: "What is the penalty for working without workers' comp when not exempt?", a: "Penalties for failing to carry required workers' comp vary by state but can be severe. Florida can impose stop-work orders requiring all business operations to cease immediately, plus fines equal to twice the premium that should have been paid. California can impose fines of up to $10,000 per employee. Many states treat non-compliance as a misdemeanor or felony. If a worker is injured when the business has no required coverage, the business owner faces personal liability for all medical costs, lost wages, and rehabilitation." },
  { q: "Is a PEO (Professional Employer Organization) a good alternative to workers' comp exemptions?", a: "A PEO can be an excellent alternative for businesses that don't qualify for exemptions or want to avoid managing workers' comp administration. In a PEO arrangement, the PEO becomes the employer of record and provides workers' comp coverage under its own policy (often at better rates due to the PEO's larger pool). However, the business owner gives up some control, and the PEO model works best for businesses with employees rather than purely owner-operated businesses." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages to 20.
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does workers' comp cost for a small business?", a: "Workers' comp cost depends on your state, industry, payroll, and claims history. Some business owners qualify for exemptions and pay no premium for themselves. When coverage is required, rates are set per $100 of payroll by job class. We quote your actual situation in about 15 minutes — never a generic estimate." },
  { q: "Do you help with WC exemptions in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and provides workers' comp exemption guidance for businesses anywhere in the country — Florida, Texas, California, New York, Georgia, Arizona, Illinois, North Carolina, and every other state." },
  { q: "How fast can we get an answer on our exemption question?", a: "Typically 15 minutes on a call. We can tell you quickly whether you qualify for an exemption in your state, what needs to be filed, and what the risks are." },
  { q: "What if we've already been cited for non-compliance?", a: "We can help you assess the situation, understand your options, and either file the exemption retroactively (if possible) or place the required coverage to stop a stop-work order or avoid further penalties. Bring us your situation and we'll find a path." },
  { q: "Should I file a workers' comp exemption or just get coverage?", a: "It depends on your situation. For working owners with no employees, an exemption saves premium cost but leaves you personally uncovered. For business owners who want protection for themselves, coverage can be better than an exemption. We help you weigh both options honestly." },
  { q: "What does an A-rated carrier mean and why does it matter?", a: "A.M. Best ratings reflect a carrier's financial strength and ability to pay claims. We place coverage with A-rated carriers so the coverage is actually there when a claim is filed." },
  { q: "Can I use occupational accident insurance instead of workers' comp?", a: "In most states, occupational accident insurance cannot legally substitute for workers' comp for employees. However, for truly independent contractors in states that allow it, and for Texas non-subscribers, occupational accident insurance is a common and cost-effective alternative that provides medical and disability coverage for work injuries." },
  { q: "How are independent contractors verified as truly exempt?", a: "The process varies by state, but generally involves documenting that the contractor satisfies the applicable test (ABC test, economic reality test, or control test) — separate business, multiple clients, control over how work is performed, own tools and equipment. Written independent contractor agreements help but are not sufficient on their own." },
  { q: "What information do you need to assess our exemption situation?", a: "Business structure (LLC, S-corp, C-corp, sole prop), state of operation, number and relationship of owners and officers, family members working in the business, 1099 contractors used, current workers' comp situation, and any prior audit findings or compliance issues." },
  { q: "Does workers' comp cover contractors who work at my business location?", a: "Not automatically. If a contractor is genuinely independent (their own business, their own insurance), your workers' comp does not cover them. If they are misclassified — truly employees working under your direction — your workers' comp may be required to cover them, and if it doesn't, you face personal liability for their injuries." },
  { q: "Can seasonal and part-time workers be classified as independent contractors?", a: "Seasonal and part-time status does not by itself make someone an independent contractor. The classification depends on the applicable state test — how much control you have over their work, whether they work for other businesses, and whether they have an independently established business. Misclassifying seasonal workers as contractors is a common audit trigger." },
  { q: "What happens if my workers' comp exemption is voided retroactively?", a: "A retroactively voided exemption means you are treated as if the person was an employee and should have been covered for the entire period the exemption was in place. This can result in retroactive premium assessments, penalty audits, and — if an injury occurred during the lapsed period — personal liability for the injured worker's costs." },
  { q: "Can you help coordinate coverage across multiple business entities?", a: "Yes. If you operate through multiple LLCs or corporations, we help you understand which entity each worker belongs to, which exemptions apply to which entities, and how to structure your coverage so there are no gaps between entities." },
  { q: "Do you offer coverage for business owners who need both an exemption and coverage for employees?", a: "Yes. The most common scenario is an owner who files an exemption for themselves while carrying workers' comp for their employees. We coordinate both — the exemption filing for the owner and the coverage policy for the team — so there are no gaps." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "state-exemption-guide": {
    heroBlurb: "The definitive state-by-state guide to workers' comp exemptions — filing requirements, eligible parties, renewal deadlines, and the key differences between LLC member, corporate officer, family member, and independent contractor rules in every state.",
    whatsCovered: ["LLC member exemption rules in all 50 states", "Corporate officer exclusion filing requirements by state", "Family member exemption eligibility and definitions", "Independent contractor classification tests by state", "Exemption renewal deadlines and lapse consequences", "Annual filing requirements and state-specific forms"],
    whoItsFor: ["Business owners unsure of their state's exemption rules", "LLC members who want to know if they can exempt themselves", "Corporate officers exploring exclusion options", "Business owners operating in multiple states", "Contractors managing 1099 subcontractor relationships"],
    whyCca: ["We cover all 50 states — not just the major ones", "Plain-English explanations of complex state rules", "Guidance on renewal requirements before exemptions lapse"],
    faqs: [
      { q: "Which states allow LLC member exemptions?", a: "Most states allow LLC members to file exemptions, but the rules vary widely. Florida allows non-construction LLC members to exempt; California generally does not allow LLC member exemptions; Texas doesn't require coverage at all. Each state has different eligibility criteria, limits on the number of exempt members, and industry restrictions." },
      { q: "How do I know which exemption applies to my business?", a: "Start with your state and business entity type. Different rules apply to sole proprietors, LLC members, corporate officers, and partners. Then consider your industry — construction typically has stricter rules in every state. Finally, consider your relationship to the business — a family member employee may have different options than an unrelated officer." },
      { q: "How often do states change their exemption rules?", a: "State workers' comp exemption rules change regularly through legislation and administrative rulemaking. Florida, California, and New York have all made significant changes in recent years. This is why staying current matters — an exemption strategy that worked five years ago may no longer be valid." },
      { q: "Can I use another state's exemption to avoid coverage in my state?", a: "No. Workers' comp exemptions are state-specific. A Florida exemption does not apply to work performed in Georgia. If your employees or officers work in multiple states, you need to understand the rules in each state where work is performed." },
      { q: "What's the most common exemption mistake business owners make?", a: "Missing renewal deadlines. Many states require annual or biennial renewal of exemptions. When a renewal is missed, the exemption lapses automatically — and the business is immediately out of compliance. The second most common mistake is not updating exemptions after a business structure change." },
    ],
  },
  "llc-member-exemption": {
    heroBlurb: "LLC member workers' comp exemptions are among the most misunderstood rules in small business compliance. The eligibility rules, industry restrictions, member count limits, and renewal requirements differ dramatically by state — and getting it wrong can void the exemption retroactively.",
    whatsCovered: ["Single-member LLC exemption eligibility by state", "Multi-member LLC exemption rules and member count limits", "Industry restrictions on LLC member exemptions (esp. construction)", "Manager-managed vs. member-managed LLC exemption differences", "Annual renewal requirements for LLC member exemptions", "Multi-state LLC exemption coordination"],
    whoItsFor: ["Single-member LLC owners seeking to exempt themselves", "Multi-member LLCs with active working members", "LLC owners in construction or other restricted industries", "LLCs operating in multiple states", "LLC owners who recently converted from a sole proprietorship or corporation"],
    whyCca: ["State-specific LLC exemption guidance — not generic advice", "We flag industry restrictions before you file", "Renewal tracking so exemptions don't lapse"],
    faqs: [
      { q: "Can a single-member LLC member exempt themselves from workers' comp?", a: "It depends on the state. In many states, a single-member LLC owner is treated like a sole proprietor and is automatically excluded from mandatory coverage. In other states, LLC members must affirmatively file an exemption. And in states like California, LLC members generally cannot exempt themselves unless they qualify as corporate officers of a corporation." },
      { q: "What is the maximum number of LLC members who can be exempt in Florida?", a: "Florida limits LLC member exemptions to 10 members per company in non-construction industries. Construction industry LLCs have different and stricter rules. Each member must file their own exemption — there is no blanket company exemption — and exemptions must be renewed annually." },
      { q: "Does the exemption apply to all LLC members or just managing members?", a: "This varies by state. Some states limit exemptions to members who are actively involved in management (managing members). Others allow any member to file an exemption regardless of their management role. Manager-managed LLCs (where a designated manager runs the business) may have different rules than member-managed LLCs." },
      { q: "What happens if an LLC adds a new member — does the exemption automatically apply?", a: "No. Each new LLC member must file their own exemption in states that require individual filing. Adding a member without filing an exemption for them means that member is covered as an employee — and if the LLC has no workers' comp policy, it may be out of compliance." },
      { q: "Can an LLC member in construction file an exemption in Florida?", a: "Construction industry LLCs in Florida have different and stricter exemption rules than non-construction businesses. Construction LLC members who meet eligibility requirements can still file exemptions, but the annual filing and renewal requirements are more rigorous, and the state monitors construction exemption compliance closely due to the high injury rate in the industry." },
    ],
  },
  "family-member-exemption": {
    heroBlurb: "Family member workers' comp exemptions allow spouses, children, and parents working in a family-owned business to be excluded from coverage in many states — but the definition of 'family business,' the qualifying relationships, and the risks of injury without coverage vary significantly by state.",
    whatsCovered: ["Spouse exemption rules in family businesses by state", "Children and minor dependent exclusion rules", "Parent (mother/father) working in the business exclusion", "Definition of 'family business' for exemption purposes", "Risks when a family member is injured without coverage", "States that allow broad family exclusions vs. narrow definitions"],
    whoItsFor: ["Sole proprietors with spouses or children working in the business", "Family-owned LLCs and corporations", "Business owners whose family members perform seasonal or part-time work", "Farmers and agricultural businesses with family labor", "Business owners considering adding family members to payroll"],
    whyCca: ["State-specific guidance on which family relationships qualify", "We explain the injury liability risk of an uninsured family member", "Help weighing exemption vs. elective coverage for family members"],
    faqs: [
      { q: "Are spouses automatically exempt from workers' comp in a family business?", a: "In many states, a spouse working in a sole proprietorship or partnership owned by their spouse is automatically excluded from workers' comp requirements. But this automatic exclusion often only applies to sole proprietors and partnerships — not LLCs or corporations. Check your state's specific rules and business entity type before assuming a spouse is excluded." },
      { q: "What happens if a family member who is exempt gets injured on the job?", a: "If a family member is excluded from the workers' comp policy and is injured at work, they have no workers' comp claim. Their medical bills, lost wages, and rehabilitation come out of pocket — or they would need to sue the business for negligence, which can be devastating for a family business. Many family business owners choose to add family members to coverage even when not required, for this reason." },
      { q: "Can children who work in the family business be excluded?", a: "Many states allow children of the business owner who work in the family business to be excluded from workers' comp. The age of the child and the nature of the work may affect eligibility. Some states exclude only children under a certain age; others exclude any child working in a parent's sole proprietorship regardless of age. Minors doing hazardous work may have additional requirements." },
      { q: "Does the family exclusion apply to extended family — siblings, cousins?", a: "Typically, no. Most state family exemptions are limited to immediate family: spouse, children, and sometimes parents. Siblings, cousins, in-laws, and other relatives are generally treated as regular employees for workers' comp purposes. Some states are narrower than others — even parents may not qualify in all states." },
      { q: "Can we elect to cover family members who are technically exempt?", a: "Yes. In virtually all states, even if a family member qualifies for an exemption, the business can voluntarily elect to include them in the workers' comp policy. This is often the best choice when family members regularly perform hazardous work — it protects them and avoids personal liability for the business owner in the event of an injury." },
    ],
  },
  "independent-contractor": {
    heroBlurb: "Misclassifying employees as independent contractors is one of the most expensive audit triggers in workers' comp. The ABC test, the economic reality test, California AB5, Florida subcontractor rules, and the consequences of getting it wrong — this is the guide business owners need before the auditor shows up.",
    whatsCovered: ["ABC test vs. economic reality test — state comparison", "California AB5 impact on IC classification", "Florida subcontractor documentation requirements", "1099 vs. W-2 misclassification audit triggers", "Penalties for misclassification by state", "How to protect your business from misclassification findings"],
    whoItsFor: ["Businesses that use 1099 contractors regularly", "Construction companies with subcontractors", "Staffing companies and gig economy businesses", "Businesses that received an audit notice related to contractor classification", "Business owners in California, New Jersey, or Massachusetts where the ABC test is strictly enforced"],
    whyCca: ["We assess your IC classification risk before the auditor does", "State-specific guidance on the applicable test in your state", "Remediation help if you've already been cited for misclassification"],
    faqs: [
      { q: "Does a 1099 form mean a worker is automatically an independent contractor?", a: "No. The 1099 form is a tax form for reporting payments to non-employees. Issuing someone a 1099 does not legally make them an independent contractor for workers' comp purposes. The worker's actual relationship with your business — how much control you have, whether they work for others, whether they have their own business — determines their classification for workers' comp." },
      { q: "What are the workers' comp penalties for IC misclassification?", a: "Penalties vary by state but can be severe. Florida can issue stop-work orders and assess fines equal to twice the workers' comp premium that should have been paid. California can fine employers $5,000 to $15,000 per violation, or up to $25,000 per violation if the misclassification is found to be part of a pattern. Many states also impose personal liability on business owners for injuries to misclassified workers." },
      { q: "How does Florida's subcontractor documentation requirement work?", a: "Florida requires businesses to verify that their subcontractors either carry workers' comp or have a valid exemption certificate. If a subcontractor does not have coverage or an exemption, the business owner (upper-tier contractor) can be held responsible for workers' comp claims by the subcontractor's workers. Requesting and retaining certificates of insurance and exemption certificates is essential for Florida contractors." },
      { q: "Can an independent contractor in California buy their own workers' comp?", a: "Sole proprietors in California can voluntarily purchase workers' comp for themselves. However, if they are classified as an employee of another business (which AB5 makes more likely), they should be covered under that business's workers' comp policy. A contractor purchasing their own policy does not change their employee vs. IC classification for the business that hires them." },
      { q: "What documentation helps prove a worker is a true independent contractor?", a: "Useful documentation includes: a written independent contractor agreement, evidence of the contractor's other clients (showing they work for multiple businesses), the contractor's own business license, the contractor's own insurance certificates, evidence that they control how they perform the work, and evidence that they provide their own tools and equipment. No single document is sufficient — the totality of the relationship matters." },
    ],
  },
  "corporate-officer-exemption": {
    heroBlurb: "Corporate officers — presidents, vice presidents, secretaries, and treasurers — may elect to be excluded from workers' comp in most states, but stock ownership requirements, officer count limits, and the applicable exclusion forms differ by state. Getting it right protects the business; getting it wrong voids the exemption retroactively.",
    whatsCovered: ["State-specific stock ownership requirements for officer exemptions", "Corporate officer exclusion election forms by state", "Limits on the number of officers who can be excluded", "S-corp vs. C-corp officer exemption differences", "Renewal requirements for officer exclusions", "Consequences of officer exemption without proper filing"],
    whoItsFor: ["Corporate officers of S-corps and C-corps", "Business owners who hold officer titles (president, VP, secretary)", "Officers in construction and non-construction industries", "Businesses with multiple officers seeking to optimize coverage costs", "Officers who recently changed their stock ownership percentage"],
    whyCca: ["State-specific officer exclusion filing guidance", "Stock ownership threshold verification before filing", "Renewal tracking so exclusions don't lapse"],
    faqs: [
      { q: "Do all corporate officers qualify for a workers' comp exemption?", a: "No. Most states limit officer exemptions to specific titled positions — president, vice president, secretary, and treasurer are the most common qualifying titles. Directors who are not officers may not qualify. Some states also impose stock ownership requirements — the officer must own a minimum percentage of the corporation's stock to be eligible." },
      { q: "What is the stock ownership requirement for a corporate officer exemption in Arizona?", a: "Arizona requires a corporate officer to own at least 10% of the corporation's stock to qualify for an exemption. If an officer's stock ownership falls below 10%, they are no longer eligible and must be covered under the workers' comp policy. Stock ownership changes should trigger an immediate review of officer exemption eligibility." },
      { q: "How many corporate officers can be excluded in Florida?", a: "Florida limits corporate officer exemptions to three officers per corporation, and those officers must own at least 10% of the corporation's stock. The officers must be a president, vice president, secretary, or treasurer. Officers must file individual exemption applications — there is no blanket company filing." },
      { q: "Does a corporate officer exemption apply to work in all states?", a: "No. A Florida corporate officer exemption applies only to work performed in Florida. If an officer works in Georgia, they need to comply with Georgia's rules. For multi-state businesses, officer exemptions must be evaluated in each state where officers perform work." },
      { q: "What happens if a corporate officer's exemption lapses because of a missed renewal?", a: "If an officer exemption lapses due to a missed renewal, the officer is immediately treated as a covered employee. The business must add them back to the workers' comp policy. If a renewal lapse is discovered during an audit, the business may face retroactive premium assessments for the period when the officer should have been covered but wasn't." },
    ],
  },
  "seasonal-worker-rules": {
    heroBlurb: "Seasonal and part-time workers create unique workers' comp compliance questions — when coverage is required, how winter layoffs affect policy audits, whether H-2A agricultural workers need separate coverage, and whether short-term workers can be classified as independent contractors.",
    whatsCovered: ["Seasonal worker workers' comp requirements by state", "Impact of seasonal layoffs on workers' comp audit calculations", "H-2A agricultural worker coverage requirements", "Part-time worker coverage thresholds by state", "Seasonal vs. year-round payroll documentation for audits", "Temporary staffing agency workers and coverage responsibility"],
    whoItsFor: ["Construction businesses with seasonal crews", "Agricultural businesses with seasonal farm labor", "Retail and hospitality businesses with holiday season staff", "Landscaping and lawn care businesses with spring/summer peaks", "Event companies with periodic large-crew events"],
    whyCca: ["Seasonal payroll documentation guidance for audit defense", "H-2A and agricultural worker coverage placement", "Year-round compliance support for businesses with seasonal patterns"],
    faqs: [
      { q: "Do seasonal workers need to be covered by workers' comp?", a: "Yes, in most states. A seasonal worker who is an employee — regardless of how short the season is — must be covered by workers' comp. The fact that work is seasonal does not create an exemption. The worker must genuinely be an independent contractor to be excluded, and the seasonal nature of the work does not by itself determine contractor status." },
      { q: "How do seasonal layoffs affect my workers' comp premium at audit?", a: "Workers' comp premiums are based on actual payroll, which is reconciled at the annual audit. Seasonal fluctuations are reflected in the audit because payroll is lower during the off-season. However, you must document your seasonal pattern clearly. Workers on winter layoff who are called back in the spring are employees — not independent contractors during the off-season — and their full-year payroll should be captured." },
      { q: "Do H-2A agricultural workers need workers' comp coverage?", a: "H-2A workers are employees and are generally subject to the same workers' comp rules as domestic workers. Many states require workers' comp for H-2A workers; others exclude agricultural workers from mandatory coverage. The federal H-2A visa program requires employers to provide workers' comp or equivalent protection. Check both your state's agricultural exemption rules and the federal H-2A requirements." },
      { q: "If I hire workers through a temporary staffing agency, who is responsible for workers' comp?", a: "Temporary staffing agencies are generally the employer of record for their placed workers and provide workers' comp coverage. However, if you hire through an agency that does not carry workers' comp, or if workers are 'leased' rather than employed by the agency, your business may be responsible. Always verify that your staffing agency carries workers' comp before placing workers at your site." },
      { q: "Can a part-time worker who works only a few hours per week be exempt from workers' comp?", a: "Part-time status alone does not create a workers' comp exemption. A part-time worker who is an employee is still an employee for workers' comp purposes. However, if a part-time worker operates their own business and genuinely meets the independent contractor tests in your state, they may be excluded as a contractor. The number of hours worked is not determinative." },
    ],
  },
  "alternative-wc-solutions": {
    heroBlurb: "When a workers' comp exemption isn't available or the Texas non-subscriber option is the right choice, there are legitimate alternatives — occupational accident insurance, professional employer organizations (PEOs), state fund coverage for hard-to-place risks, and DBA (Defense Base Act) coverage for government contractors.",
    whatsCovered: ["Texas non-subscriber system and common-law liability exposure", "Occupational accident insurance as a WC alternative", "Professional employer organization (PEO) workers' comp programs", "State fund (assigned risk) workers' comp for hard-to-place businesses", "DBA (Defense Base Act) coverage for government contractors", "Posting requirements for Texas non-subscribers"],
    whoItsFor: ["Texas businesses evaluating the non-subscriber option", "Business owners whose industry makes them hard to place in the voluntary market", "Companies seeking lower-cost alternatives to traditional workers' comp", "Startups and new businesses that can't access voluntary workers' comp markets", "Government contractors requiring DBA coverage"],
    whyCca: ["Honest assessment of non-subscriber vs. traditional WC for Texas businesses", "Occupational accident policy placement for qualified situations", "State fund access for businesses declined by the voluntary market"],
    faqs: [
      { q: "What is the Texas non-subscriber workers' comp system?", a: "Texas is the only state that does not require private employers to carry workers' comp insurance. Employers that choose not to carry workers' comp are called 'non-subscribers.' Non-subscribers lose key tort defenses — they cannot claim that the employee was contributorily negligent, assumed the risk, or was injured by a fellow employee. This means injured workers can sue non-subscriber employers for the full value of their injuries under common law." },
      { q: "What is occupational accident insurance and when is it appropriate?", a: "Occupational accident insurance (also called occupational accident or 'occ-acc') is a private insurance product that covers medical expenses and disability for work-related injuries. It is not the same as workers' comp — it does not create the statutory employer-employee relationship that workers' comp creates. It is most appropriate for Texas non-subscribers and for legitimate independent contractors who want protection for work injuries. It cannot legally substitute for workers' comp for employees in most states." },
      { q: "How does a PEO provide workers' comp?", a: "A professional employer organization (PEO) enters into a co-employment arrangement where the PEO becomes the employer of record for your employees and provides workers' comp coverage under the PEO's master policy. The PEO's large employee pool often allows access to lower rates and better coverage than a small business could obtain individually. The business retains day-to-day control of its employees." },
      { q: "What are the posting requirements for Texas non-subscribers?", a: "Texas non-subscribers must prominently post a notice in their workplace informing employees that they are not covered by workers' comp. This notice must be in English and Spanish (and any other language spoken by a significant portion of the workforce). The notice must describe the employee's rights to sue the employer under common law. Failure to post the required notice exposes the employer to additional liability." },
      { q: "Can I get workers' comp if I've been declined by voluntary market carriers?", a: "Yes. Every state has an assigned risk plan (also called a state fund or last-resort fund) that must accept any employer that cannot get coverage in the voluntary market. Assigned risk coverage is typically more expensive than voluntary market coverage, but it fulfills the legal requirement. We can place coverage in assigned risk plans in all 50 states." },
    ],
  },
  "compliance-audit": {
    heroBlurb: "A workers' comp exemption audit can void your exemption retroactively, trigger stop-work orders, and impose penalties equal to years of avoided premium. Knowing what triggers a review, what auditors look for, and how to prepare your exemption filings before an auditor arrives is the best protection.",
    whatsCovered: ["What triggers a workers' comp exemption audit", "Subcontractor 1099 mismatch audit red flags", "What auditors look for during a workers' comp audit", "Retroactive voiding of exemptions and premium assessments", "Civil and criminal penalties for non-compliance", "How to prepare your records for an audit"],
    whoItsFor: ["Business owners who have received an audit notice", "Businesses with high subcontractor 1099 volumes", "Companies that recently changed their business structure", "Business owners unsure whether their exemption filings are current", "Companies in industries with high audit rates (construction, landscaping, staffing)"],
    whyCca: ["Pre-audit exemption filing review and remediation", "Audit support and representation", "Ongoing compliance monitoring to prevent audit surprises"],
    faqs: [
      { q: "What triggers a workers' comp exemption audit?", a: "Common audit triggers include: a high volume of 1099 payments relative to your reported payroll, a worker injury occurring while no coverage was in place, a complaint from a competitor or employee, a routine state compliance sweep (especially in construction), a business structure change (new LLC or corporation formation), and cross-referencing of state tax records with workers' comp filings." },
      { q: "What do workers' comp auditors look for?", a: "Auditors look for: workers classified as contractors who should be employees (based on the applicable state test), exemption certificates that have lapsed or were not properly filed, changes in business structure that affected exemption eligibility, employees who were not included in the payroll, and subcontractors who did not carry their own workers' comp and were not exempt." },
      { q: "Can a workers' comp exemption be voided retroactively?", a: "Yes. If an auditor finds that an exemption was improperly filed, lapsed without renewal, or was applied to someone who didn't qualify, the state can void the exemption retroactively to the date it should have been invalid. This means the business is treated as if it had no coverage during that period — and if any workers were injured during the lapsed period, the business faces uncovered injury liability." },
      { q: "What are the civil and criminal penalties for non-compliance?", a: "Civil penalties range from premium assessments (paying the premium that should have been paid, often with interest) to fines that multiply the unpaid premium. In Florida, fines can equal twice the unpaid premium plus a daily fine during the period of non-compliance. Criminal penalties apply in some states for willful non-compliance — particularly for businesses that knowingly operate without required coverage after receiving a stop-work order." },
      { q: "How should I prepare for a workers' comp audit?", a: "Before an audit: gather all exemption certificates (for yourself, officers, and subcontractors), verify renewal dates for all exemptions, organize your 1099 payment records with supporting documentation of each contractor's independent business status, review your payroll records for completeness, and ensure any workers who should be covered are on your policy. If you have concerns about your compliance, a pre-audit review can identify issues before the auditor does." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page (export name kept as AZ_REGIONS)
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Florida", note: "Construction exemption filings, annual renewal, high enforcement volume" },
  { name: "Texas", note: "Non-subscriber system, occupational accident alternatives, TDI oversight" },
  { name: "California", note: "AB5 restrictions, strict DIR enforcement, LLC officer exemption limits" },
  { name: "New York", note: "WC board exemption filings, construction rules, out-of-state worker coverage" },
  { name: "Georgia", note: "LLC member exemptions, sole proprietor rules, subcontractor compliance" },
  { name: "Arizona", note: "Corporate officer and LLC exemptions, ICA enforcement, construction market" },
  { name: "Illinois", note: "Strict subcontractor rules, family business exemptions, corporate officer rules" },
  { name: "North Carolina", note: "Construction subcontractor exemption challenges, NCLB oversight" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "State-by-State Exemption Guide",
  "LLC Member Exemption Filing",
  "Family Member Exemption",
  "Independent Contractor Classification Review",
  "Corporate Officer Exemption",
  "Seasonal Worker Coverage",
  "Alternative WC Solutions (Occ-Acc / PEO)",
  "Exemption Compliance Audit",
  "Full WC Program / Bundle",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
