import React from "react"

const FAQ = () => {
  return (
   <section className="bg-white mb-20">
  <div className="max-w-6xl mx-auto px-6">
    {/* Title */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-12">
      FREQUENTLY ASKED <br /> QUESTIONS
    </h2>

    {/* FAQ Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
      {/* Q1 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          1. What is this platform about?
        </h3>
        <p className="text-gray-600 text-sm">
          This platform combines e-commerce and e-learning to help university and
          college students earn and learn simultaneously by buying/selling study
          materials and creating/enrolling in skill-based courses.
        </p>
      {/* Q1 */}
      </div>

      {/* Q2 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          2. Who can use this platform?
        </h3>
        <p className="text-gray-600 text-sm">
          Any university or college student can register, open a shop, sell
          products, offer courses, and purchase from others — all in one place.
        </p>
      {/* Q2 */}
      </div>

      {/* Q3 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          3. Can I sell items even if I’m not a professional seller?
        </h3>
        <p className="text-gray-600 text-sm">
          Absolutely! The platform is designed to help students like you become
          entrepreneurs by selling new or gently used academic products.
        </p>
      {/* Q3 */} 
      </div>

      {/* Q4 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          4. How do I create and sell my own course?
        </h3>
        <p className="text-gray-600 text-sm">
          You can easily upload your course content through your dashboard after
          logging in. It can be video-based or resource-based with proper titles,
          pricing, and descriptions.
        </p>
      {/* Q4 */}  
      </div>

      {/* Q5 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          5. What if I want to buy a product but don’t have enough money?
        </h3>
        <p className="text-gray-600 text-sm">
          You can sell your own items or courses, earn money into your wallet,
          and use that balance to purchase any product or course available on the
          platform.
        </p>
      {/* Q5 */}
      </div>

      {/* Q6 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          6. How does the AI system help me?
        </h3>
        <p className="text-gray-600 text-sm">
          Our AI tracks your search history and preferences (using cookies) to
          offer personalized suggestions tailored to your needs and interests.
        </p>
      {/* Q6 */}
      </div>

      {/* Q7 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          7. Is there any fee to open a shop or upload a course?
        </h3>
        <p className="text-gray-600 text-sm">
          Opening a shop is completely free! There might be a small commission
          fee on successful transactions, which helps us maintain the platform.
        </p>
      {/* Q7 */}
      </div>

      {/* Q8 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          8. Can I use this platform on mobile?
        </h3>
        <p className="text-gray-600 text-sm">
          Yes! Our platform is mobile-responsive and will soon have a dedicated
          app for both Android and iOS users.
        </p>
      {/* Q8 */}
      </div>

      {/* Q9 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          9. Is my personal and financial data safe here?
        </h3>
        <p className="text-gray-600 text-sm">
          Yes, we use secure encryption and data protection protocols to keep all
          your information safe and private.
        </p>
      {/* Q9 */}
      </div>

      {/* Q10 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          10. How do I get support if I face any issues?
        </h3>
        <p className="text-gray-600 text-sm">
          You can contact our support team via live chat or email anytime. We’re
          here to help you grow!
        </p>
      {/* Q10 */}
      </div>

    {/* FAQ Grid */}
    </div>
    
  </div>
</section>
  )
}

export default FAQ