// @ds-adherence-ignore -- React Native scaffold; not a web component
// Real data sourced from LawBaba codebase (saifulislam735/LawBaba)

export interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  reviewCount: number;
  consultationFee: string;
  location: string;
  available: boolean;
  description: string;
  cases: number;
  successRate: string;
  languages: string[];
  education: string[];
  expertise: string[];
  availability: Record<string, string>;
}

export interface Blog {
  id: number;
  category: string;
  title_en: string;
  title_bn: string;
  date: string;
  content_en: string;
  content_bn: string;
}

export const lawyers: Lawyer[] = [
  {
    id: 16, name: 'Mst. Mahafuza Akter Mim', specialization: 'Civil Law',
    experience: '5 years', rating: 4.8, reviewCount: 135, consultationFee: '750',
    location: 'Chattogram', available: true,
    description: 'Expert in civil litigation, property disputes, and contract law.',
    cases: 180, successRate: '88%', languages: ['Bengali', 'English'],
    education: ['LL.B., University of Chittagong', 'LL.M., North South University'],
    expertise: ['Civil Litigation', 'Property Disputes', 'Contract Law', 'Inheritance Cases'],
    availability: { Saturday: '10:00 AM - 2:00 PM', Monday: '10:00 AM - 5:00 PM', Wednesday: '10:00 AM - 4:00 PM' },
  },
  {
    id: 2, name: 'Sara Hossain', specialization: 'Human Rights Law',
    experience: '25 years', rating: 4.8, reviewCount: 150, consultationFee: '600',
    location: 'Dhaka', available: true,
    description: 'Expert in human rights law and a prominent advocate at the Supreme Court.',
    cases: 300, successRate: '90%', languages: ['Bengali', 'English'],
    education: ['University of Oxford'],
    expertise: ['Human Rights Law', 'Constitutional Law', 'Civil Rights', 'Refugee Law'],
    availability: { Monday: '9:00 AM - 1:00 PM', Tuesday: '9:00 AM - 1:00 PM', Thursday: '9:00 AM - 12:00 PM' },
  },
  {
    id: 3, name: 'Md. Ashraf Ali', specialization: 'Criminal Law',
    experience: '10 years', rating: 4.7, reviewCount: 130, consultationFee: '720',
    location: 'Chittagong', available: true,
    description: 'Specializes in criminal defense including murder, theft, and assault cases.',
    cases: 210, successRate: '88%', languages: ['Bengali', 'English'],
    education: ['LL.B., University of Dhaka', 'LL.M., University of Rajshahi'],
    expertise: ['Criminal Defense', 'Assault Cases', 'Murder Trials', 'Theft and Fraud'],
    availability: { Monday: '9:00 AM - 1:00 PM', Wednesday: '9:00 AM - 12:00 PM', Friday: '9:00 AM - 11:00 AM' },
  },
  {
    id: 7, name: 'Sushmita Das', specialization: 'Corporate Law',
    experience: '13 years', rating: 4.8, reviewCount: 160, consultationFee: '740',
    location: 'Chittagong', available: true,
    description: 'Specializing in mergers & acquisitions, corporate compliance, and business litigation.',
    cases: 210, successRate: '90%', languages: ['Bengali', 'English'],
    education: ['LL.B., University of Dhaka'],
    expertise: ['Corporate Law', 'Mergers & Acquisitions', 'Business Litigation'],
    availability: { Monday: '9:00 AM - 12:00 PM', Tuesday: '9:00 AM - 12:00 PM', Thursday: '9:00 AM - 11:00 AM' },
  },
  {
    id: 9, name: 'Samira Ali', specialization: 'Family Law',
    experience: '6 years', rating: 4.5, reviewCount: 90, consultationFee: '650',
    location: 'Dhaka', available: true,
    description: 'Specializing in divorce, child custody, and marital disputes.',
    cases: 130, successRate: '78%', languages: ['Bengali', 'English'],
    education: ['LL.B., University of Dhaka'],
    expertise: ['Divorce Law', 'Child Custody', 'Marital Disputes'],
    availability: { Monday: '10:00 AM - 1:00 PM', Wednesday: '10:00 AM - 1:00 PM', Friday: '10:00 AM - 12:00 PM' },
  },
  {
    id: 4, name: 'Khaleda Begum', specialization: 'Labor Law',
    experience: '15 years', rating: 4.5, reviewCount: 110, consultationFee: '700',
    location: 'Sylhet', available: true,
    description: 'Specializes in employee rights, workplace disputes, and labor contracts.',
    cases: 250, successRate: '82%', languages: ['Bengali', 'English'],
    education: ['LL.B., University of Dhaka', 'LL.M., University of Rajshahi'],
    expertise: ['Labor Rights', 'Workplace Disputes', 'Labor Contracts', 'Union Rights'],
    availability: { Monday: '9:00 AM - 1:00 PM', Thursday: '9:00 AM - 12:00 PM' },
  },
];

export const blogs: Blog[] = [
  {
    id: 1, category: 'Criminal Law', date: '2025-02-01',
    title_en: 'Understanding Theft Laws in Bangladesh',
    title_bn: 'বাংলাদেশে চুরির আইন বোঝা',
    content_en: 'Theft, as defined under Section 378 of the Penal Code of Bangladesh, involves the dishonest intention to take movable property without the owners consent. Penalties can include up to 7 years of imprisonment.',
    content_bn: 'চুরি, বাংলাদেশের দণ্ডবিধির ৩৭৮ ধারায় সংজ্ঞায়িত, মালিকের সম্মতি ছাড়া চলমান সম্পত্তি নেওয়ার অসৎ উদ্দেশ্য জড়িত।',
  },
  {
    id: 2, category: 'Family Law', date: '2025-02-03',
    title_en: 'Divorce Procedures in Bangladesh',
    title_bn: 'বাংলাদেশে বিবাহবিচ্ছেদের প্রক্রিয়া',
    content_en: 'Divorce procedures for Muslims in Bangladesh are governed by the Muslim Family Laws Ordinance 1961. A husband can initiate divorce through talaq with a written notice to the local Union Parishad chairman.',
    content_bn: 'বাংলাদেশে মুসলিমদের জন্য বিবাহবিচ্ছেদ প্রক্রিয়া ১৯৬১ সালের মুসলিম পারিবারিক আইন অধ্যাদেশ দ্বারা পরিচালিত হয়।',
  },
  {
    id: 3, category: 'Property Law', date: '2025-02-05',
    title_en: 'Land Registration Process',
    title_bn: 'জমি নিবন্ধন প্রক্রিয়া',
    content_en: 'Registering land in Bangladesh is a critical step to secure legal ownership. The process starts with verifying ownership documents like sale deeds and mutation certificates.',
    content_bn: 'বাংলাদেশে জমি নিবন্ধন আইনি মালিকানা সুরক্ষিত করতে একটি গুরুত্বপূর্ণ পদক্ষেপ।',
  },
  {
    id: 9, category: 'Business Law', date: '2025-02-17',
    title_en: 'Starting a Business in Bangladesh',
    title_bn: 'বাংলাদেশে ব্যবসা শুরু করা',
    content_en: 'Starting a business in Bangladesh involves registering with the Registrar of Joint Stock Companies, obtaining a trade license, and securing tax identification.',
    content_bn: 'বাংলাদেশে ব্যবসা শুরু করতে জয়েন্ট স্টক কোম্পানির রেজিস্ট্রারের সাথে নিবন্ধন এবং ট্রেড লাইসেন্স প্রয়োজন।',
  },
  {
    id: 5, category: 'Labor Law', date: '2025-02-09',
    title_en: "Workers' Rights in Bangladesh",
    title_bn: 'বাংলাদেশে শ্রমিকদের অধিকার',
    content_en: 'The Bangladesh Labour Act 2006 guarantees workers rights to fair wages, safe workplaces, and benefits like maternity leave.',
    content_bn: 'বাংলাদেশ শ্রম আইন ২০০৬ শ্রমিকদের ন্যায্য মজুরি ও নিরাপদ কর্মক্ষেত্রের অধিকার নিশ্চিত করে।',
  },
];

export const specializations = ['All', 'Civil', 'Criminal', 'Family', 'Corporate', 'Labor', 'Human Rights'];
