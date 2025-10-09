const newsArticles = [
  {
    id: 1,
    title: "AI Revolution in 2025",
    description: "AI continues to grow, with new breakthroughs in machine learning.",
    image: "https://source.unsplash.com/400x300/?technology,ai",
    source: "TechNews",
  },
  {
    id: 2,
    title: "Stock Markets Rally",
    description: "Markets around the world show signs of strong recovery.",
    image: "https://source.unsplash.com/400x300/?stocks,finance",
    source: "FinanceDaily",
  },
  {
    id: 3,
    title: "Climate Change Concerns",
    description: "Global leaders meet to discuss climate change action plans.",
    image: "https://source.unsplash.com/400x300/?climate,nature",
    source: "EcoWorld",
  },
  {
    id: 4,
    title: "SpaceX Launches New Rocket",
    description: "A new era in space exploration begins.",
    image: "https://source.unsplash.com/400x300/?space,rocket",
    source: "SpaceTimes",
  },
];

const News = () => {
  return (
    <div className="px-8 py-8 ">
      <h2 className="text-5xl text-[#E6EDF3] max-w-[1000px] text-center  font-bold mb-4">News</h2>
      <div className="flex space-x-4 mt-10 h-[350px] overflow-x-auto w-[900px] border-2 mx-auto">
        {newsArticles.map((article) => (
          <div key={article.id} className="min-w-[300px] max-w-[300px] bg-[	#64748B] border-2 rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} classN ame="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{article.description}</p>
              <p className="mt-3 text-sm text-blue-500">{article.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
