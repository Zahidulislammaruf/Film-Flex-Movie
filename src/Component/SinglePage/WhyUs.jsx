
const WhyUs = () => {
    return (
        <div>
            <div className="container mx-auto  py-10 rounded-lg hover:bg-white hover:text-black">
      <div className="">
        <h1 className="text-3xl text-center font-bold mb-8">Why Choose FilmFlex?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white m-3 p-4 rounded shadow text-black hover:bg-black hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Vast Movie Selection</h2>
            <p>Explore a diverse library of movies and drama series from various genres.</p>
          </div>
          <div className="bg-white m-3 p-4 rounded shadow text-black hover:bg-black hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Streaming Variety</h2>
            <p>Watch content from multiple streaming platforms in one place.</p>
          </div>
          <div className="bg-white m-3 p-4 rounded shadow text-black hover:bg-black hover:text-white">
            <h2 className="text-xl font-semibold mb-2">High-Quality Viewing</h2>
            <p>Enjoy high-definition video quality for a cinematic experience.</p>
          </div>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default WhyUs;