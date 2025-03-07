// function Landing(){
//     return <div>Landing Page</div>;
// }

import NavBar from "../components/NavBar";

// YOU CAN EITHER USE THE ABOVE OR THE ARROW FUNCTION BELOW or TYPE RAFCE

const Landing = ()=>{
    return (
        <div className="relative bg-[url('/public/Images/ghniteciti.jpg')] bg-cover bg-center py-10">
        {/* Navigation Bar */}
        <div><NavBar/></div>

        <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white align-items center py-10">Discover great places in Ghana</h1>
            <p className="text-2xl font-italics text-white align-items center py-8">Let's uncover the best eateries, shops and fun places together!</p>
        </div>
       
        
        {/* Search Bar */}
        <div className="flex justify-center mt-20">
          <div className="bg-white p-3 rounded-lg flex shadow-lg w-[60%]">
            {/* Category Dropdown */}
            <select className="px-4 py-2 border-r border-gray-300 focus:outline-none">
              <option>What are you looking for?</option>
              <option>Houses/Hotels</option>
              <option>Eateries</option>
              <option>Malls</option>
            </select>
  
            {/* Search Input */}
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 flex-grow focus:outline-none"
            />
  
            {/* City Dropdown */}
            <select className="px-4 py-2 border-l border-gray-300 focus:outline-none">
              <input type="text" placeholder="Cities"/>
              <option>Accra</option>
              <option>Koforidua</option>
              <option>Kumasi</option>
              <option>Ho</option>
              <option>Sunyani</option>
              <option>Takoradi</option>
              <option>CapeCoast</option>
            </select>
  
            {/* Search Button */}
            <button className="bg-pink-700 text-white px-8 py-4 rounded-r-lg">SEARCH</button>
          </div>
        </div>
      </div>
    );
};
export default Landing;

{/* <section>
    <div>
    const HeroSection = () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
      ))}
    </section>
  );

    </div>
</section> */}

