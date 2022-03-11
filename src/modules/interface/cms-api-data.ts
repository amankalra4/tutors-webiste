export interface Dimensions {
    width: number;
    height: number;
}

export interface UpiImage {
    dimensions: Dimensions;
    alt: string;
    copyright?: any;
    url: string;
}

export interface UpiContent {
    type: string;
    text: string;
    spans: any[];
}

export interface BankAccountDetail {
    type: string;
    text: string;
    spans: any[];
}

export interface OurTeam {
    type: string;
    text: string;
    spans: any[];
}

export interface OurMission {
    type: string;
    text: string;
    spans: any[];
}

export interface Positivity {
    type: string;
    text: string;
    spans: any[];
}

export interface Inclusivity {
    type: string;
    text: string;
    spans: any[];
}

export interface Creativity {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions2 {
    width: number;
    height: number;
}

export interface HomePageImage {
    dimensions: Dimensions2;
    alt?: any;
    copyright?: any;
    url: string;
}

export interface VisionText {
    type: string;
    text: string;
    spans: any[];
}

export interface CommunicationList {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions3 {
    width: number;
    height: number;
}

export interface CommunicationImage {
    dimensions: Dimensions3;
    alt: string;
    copyright?: any;
    url: string;
}

export interface Seo {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions4 {
    width: number;
    height: number;
}

export interface SeoImage {
    dimensions: Dimensions4;
    alt: string;
    copyright?: any;
    url: string;
}

export interface DigitalMarketing {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions5 {
    width: number;
    height: number;
}

export interface DigitalMarketingImage {
    dimensions: Dimensions5;
    alt: string;
    copyright?: any;
    url: string;
}

export interface Python {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions6 {
    width: number;
    height: number;
}

export interface PythonImage {
    dimensions: Dimensions6;
    alt: string;
    copyright?: any;
    url: string;
}

export interface WebDevelopment {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions7 {
    width: number;
    height: number;
}

export interface WebDevImage {
    dimensions: Dimensions7;
    alt: string;
    copyright?: any;
    url: string;
}

export interface MarchExam {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions8 {
    width: number;
    height: number;
}

export interface MarchExamsImage {
    dimensions: Dimensions8;
    alt: string;
    copyright?: any;
    url: string;
}

export interface InterviewProgram {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions9 {
    width: number;
    height: number;
}

export interface InterviewTrainingImage {
    dimensions: Dimensions9;
    alt: string;
    copyright?: any;
    url: string;
}

export interface CompetitiveExam {
    type: string;
    text: string;
    spans: any[];
}

export interface Dimensions10 {
    width: number;
    height: number;
}

export interface CompetitiveExamsImage {
    dimensions: Dimensions10;
    alt: string;
    copyright?: any;
    url: string;
}

export interface CommunicationSkillsPricing {
    type: string;
    text: string;
    spans: any[];
}

export interface OtherSkillsPrice {
    type: string;
    text: string;
    spans: any[];
}

export interface MarchExamsPricing {
    type: string;
    text: string;
    spans: any[];
}

export interface Address {
    type: string;
    text: string;
    spans: any[];
}

export interface MobileNumber {
    type: string;
    text: string;
    spans: any[];
}

export interface EmailId {
    type: string;
    text: string;
    spans: any[];
}

export interface CollectiveData {
    upi_image: UpiImage;
    upi_content: UpiContent[];
    bank_account_details: BankAccountDetail[];
    our_team: OurTeam[];
    our_mission: OurMission[];
    positivity: Positivity[];
    inclusivity: Inclusivity[];
    creativity: Creativity[];
    home_page_image: HomePageImage;
    vision_text: VisionText[];
    communication_list: CommunicationList[];
    communication_image: CommunicationImage;
    seo: Seo[];
    seo_image: SeoImage;
    digital_marketing: DigitalMarketing[];
    digital_marketing_image: DigitalMarketingImage;
    python: Python[];
    python_image: PythonImage;
    web_development: WebDevelopment[];
    web_dev_image: WebDevImage;
    march_exams: MarchExam[];
    march_exams_image: MarchExamsImage;
    interview_programs: InterviewProgram[];
    interview_training_image: InterviewTrainingImage;
    competitive_exams: CompetitiveExam[];
    competitive_exams_image: CompetitiveExamsImage;
    communication_skills_pricing: CommunicationSkillsPricing[];
    other_skills_price: OtherSkillsPrice[];
    march_exams_pricing: MarchExamsPricing[];
    address: Address[];
    mobile_number: MobileNumber[];
    email_id: EmailId[];
}

export interface Result {
    id: string;
    uid?: any;
    url?: any;
    type: string;
    href: string;
    tags: any[];
    first_publication_date: Date;
    last_publication_date: Date;
    slugs: string[];
    linked_documents: any[];
    lang: string;
    alternate_languages: any[];
    data: CollectiveData;
}

export interface CMSDataRootObject {
    page: number;
    results_per_page: number;
    results_size: number;
    total_results_size: number;
    total_pages: number;
    next_page?: any;
    prev_page?: any;
    results: Result[];
    version: string;
    license: string;
}
