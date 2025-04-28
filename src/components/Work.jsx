import React from 'react'

function Work() {
  return (
    <section className="py-16 max-w-[1080px] font-[Poppins] mx-auto text-[#E6EDF3]">
       <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
      <div className="max-w-6xl mx-auto px-4  mt-12">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-4 space-y-6 mt-22">
          
          <div className="flex flex-col items-center text-center ">
            <div className="bg-white/10 backdrop-blur-md border border-[#30363D] text-blue-400 p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
            <p className="text-[#8B949E] max-w-xs">
              Sign up or Login into your account to take full control.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border text-blue-400 border-[#30363D] p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete the Profile</h3>
            <p className="text-[#8B949E] max-w-xs">
              Add your details and complete your profile.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border text-blue-400 border-[#30363D] p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Access DashBoard</h3>
            <p className="text-[#8B949E] max-w-xs">
            access your personalised dashboard to visualise your finance
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border text-blue-400 border-[#30363D] p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">See Trends</h3>
            <p className="text-[#8B949E] max-w-xs">
            Explore real-time financial news, market trends, and AI-powered insights.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border text-blue-400 border-[#30363D] p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              5
            </div>
            <h3 className="text-xl font-semibold mb-2">Invest Smartly</h3>
            <p className="text-[#8B949E] max-w-xs">
              Make informed investment decisions and track your progress effortlessly.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-md border text-blue-400 border-[#30363D] p-6 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
              6
            </div>
            <h3 className="text-xl font-semibold mb-2">Become Financially stable</h3>
            <p className="text-[#8B949E] max-w-xs">
              Now See your Investments touching skies.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Work
