export type Categories = "environmental" | "social" | "governance";

export type Question = {
  id: string;
  question: string;
  answers: string[];
  type: "select" | "radio" | "input";
  section: "background" | "assessment";
  category: "background" | Categories;
  label?:string;
};

export const backgroundQuestions = [
  {
    question: "sector",
    type: "select",
    answers: ["Primary(Raw Materials)", "Tertiary (Services)", "Secondary(Manufacturing)","Human Services and Desicion Making "],
    section: "background",
    category: "background",
  },
  {
    type: "input",
    question: "Describe your business in one sentence",
    answers: [""],
    label:"Business consultant",
    section: "background",
    category: "background",

  },
  {
    question: "Which best describes the area you work in or you business?",
    type: "radio",
    answers: ["Technology", "Education"],
    section: "background",
    category: "background",
  },
  {
    question: "What's your company located ?",
    type: "radio",
    answers: ["Nairobi", "Nakuru", "Mombasa","Other" ],
    section: "background",
    category: "background",
  },
  {
    type: "radio",
    question: "How many employees does your company have?",
    answers: [
      "1-10",
      "11-50",
      "51-200",
      "201-500",
      "501-1000",
      "1001-5000",
      "5001-10,000",
      "10,001+",
    ],
    section: "background",
    category: "background",
  },
] as Question[];

export const assessmentQuestions = [

  {
  question: "What does your company do? What are it's main products, activities and services?",
    section: "assessment",
    category: "environmental",
  },
  {
    question: "What is the businesses mision and vision? What are your long-term goals?",
    section: "assessment",
    category: "environmental",
  },
  
  {
    question: "What industry and sector is your business in?",
    section: "assessment",
    category: "environmental",
  },
  {
    question: "How commited is your company to creating a positive social impact?",
    section: "assessment",
    category: "social",
  },
  {
    question: "To what extent do you believe your company has positive impact on society based on your posicy and internal governance",
    section: "assessment",
    category: "governance",
  },
] as Question[];

[...backgroundQuestions, ...assessmentQuestions].forEach(
  (q, idx) => (q.id = (idx + 1).toString()),
);
