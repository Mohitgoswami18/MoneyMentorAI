import React from 'react'

function ChooseUs() {
  return (
    <div className='font-[Poppins]'>

        <div className='h-2 w-full border-b-[0.5px] mt-6 border-b-[#374151]'></div>
        
      <section className="py-16 pb-0 max-w-[1080px] font-[Poppins] mx-auto  text-[#E6EDF3]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose MoneyMentorAI?
        </h2>

        <div className="grid grid-cols-3 gap-8">
 
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-[#30363D] hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Real-Time Insights</h3>
            <p className="text-[#8B949E]">
              Stay updated with the latest financial trends and news — delivered instantly to your dashboard.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-[#30363D] hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">AI-Driven Recommendations</h3>
            <p className="text-[#8B949E]">
              Get smarter financial suggestions based on real-time data, not guesswork or outdated advice.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-[#30363D] hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">Secure & Private</h3>
            <p className="text-[#8B949E]">
              Your data stays yours. We prioritize security and privacy, so you can focus on growing your wealth confidently.
            </p>
          </div>

        </div>
      </div>
    </section>

    </div>
  )
}

export default ChooseUs
