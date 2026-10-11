export const site = {
  name: 'Hussain Rao',
  email: 'hussain7002@gmail.com',
  linkedin: '', // add the LinkedIn URL here; the link appears once this is set
  location: 'New Delhi, India',
  description:
    'Hussain Rao: IIT Kharagpur engineer working on data, digital public infrastructure and AI for public health systems in India.',
};

export type Tint = 'blue' | 'red' | 'green' | 'yellow';

// Lab: independent projects only (own code, public data), not tools built in employment;
// those live inside the case studies. The Lab nav link, homepage section and sitemap entry
// appear automatically once this list has an entry.
export const lab: { title: string; text: string; status: string; tint: Tint; shape: string; href: string; meta: string }[] = [];

// Order matters: shown in this order on the homepage and the Publications page. No publication years.
// cover: first page of the publication, rendered from the official PDF (public/img/pubs/).
export const publications: { org: string; tint: Tint; title: string; src: string; href: string; cover: string }[] = [
  { org: 'DELOITTE · CII', tint: 'green', title: "Strengthening India's healthcare ecosystem: Unlocking data governance in alignment with the Digital Personal Data Protection (DPDP) Act, 2023 and the DPDP Rules, 2025", src: 'Deloitte India with the Confederation of Indian Industry (CII) · Co-author', href: 'https://www.deloitte.com/in/en/Industries/life-sciences-health-care/strengthening-indias-healthcare-ecosystem-unlocking-data-governance-in-alignment-with-the-digital-personal-data-protection-dpdp-act-2023-and-the-dpdp-rules-2025.html', cover: '/img/pubs/deloitte-cii-dpdp.webp' },
  { org: 'DELOITTE AP', tint: 'green', title: 'Access Amplified: Technology Solutions for Improving Healthcare Access in Asia Pacific', src: 'Deloitte Asia Pacific Health Institute · Co-author', href: 'https://www.deloitte.com/ap/en/perspectives/technology-solutions-improving-asia-pacific-health-access.html', cover: '/img/pubs/deloitte-access-amplified.webp' },
  { org: 'WHO SEARO', tint: 'blue', title: 'Regional manual with operating guides on respiratory care equipment and devices', src: 'World Health Organization, South-East Asia Regional Office · Contributor', href: 'https://www.who.int/publications/i/item/9789292800055', cover: '/img/pubs/who-respiratory-manual.webp' },
  { org: 'WHO SEARO', tint: 'blue', title: 'Generic training modules on oxygen/respiratory care equipment', src: 'World Health Organization, South-East Asia Regional Office · Contributor', href: 'https://www.who.int/publications/i/item/9789292800062', cover: '/img/pubs/who-oxygen-training-modules.webp' },
];
