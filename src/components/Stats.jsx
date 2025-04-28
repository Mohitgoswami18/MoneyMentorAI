import Counter from "./Counter";

const StatsSection = () => {
  return (
    <section className="py-12 max-w-[1080px] mx-auto pb-0 font-[Poppins]">
        <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
      <div className="text-center mb-8 mt-22">
        <h1 className="text-5xl text-[#F3F4F6] font-bold">Our Impact (Future Vision)</h1>
        <p className="text-gray-600 text-md mt-2">
          *Statistics below are for demonstration purposes only.*
        </p>
      </div>

      <div className="flex justify-center flex-wrap">
        <Counter target="500" label="Future Money Mentors Empowered" />
        <Counter target="90" label="Projected User Satisfaction Rate" />
        <Counter target="250" label="Financial Goals to be Achieved Soon" />
      </div>
    </section>
  );
};

export default StatsSection;
