import React, { useEffect, useState } from "react";

function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/faq")
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);
  

  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">Q: {faq.q}</p>
            <p className="text-gray-600">A: {faq.a}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default FAQ;
