import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    question: "How much does your course cost?",
    answer: "Online Class ($150), Physical Class ($250), One-on-One Mentorship ($500)",
  },
  {
    question: "How long does your class last and what means is the teaching?",
    answer: "The Classes last for one month with lifetime mentorship",
  },
  {
    question: "Do you have a physical office?",
    answer: "Yes, we currently have the biggest trading floor in Osun State located at Obafemi Awolowo University, Ile-Ife",
  },
  {
    question: "Do you give signals?",
    answer: "No, but we drop general signal on the community group"
  }
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col w-full mb-35 items-start sm:items-center gap-8 px-10">
      <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-white ">
        Frequently Asked Questions
      </p>
      <h2 className="text-5xl font-semibold sm:text-center overflow-hidden">
        We are here to answer all your questions
      </h2>
      <div className="lg:w-1/2 w-full mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 w-full cursor-pointer transition-all"
            onClick={(e) => {
              e.preventDefault();
              toggleFAQ(index);
            }}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{faq.question}</p>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-700" />
              ) : (
                <Plus className="w-5 h-5 text-gray-700" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
