const HeroSection = ()=>{
    return (<>
       <main className="hero container">
        <div className = "hero-content">
            <h1 className="reveal-text">YOUR FEET 
DESERVE
THE BEST</h1>
<p >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
<div className="hero-button">
    <button>Shop Now</button>
    <button className="secondary-button">Category</button>
</div>
<div className="shopping">
    <p>Also Available On</p>
    <div className = "brand-icons">
        <img src="././public/images/flipkart.png" alt="flipkart" />
        <img src="././public/images/amazon.png" alt="amazon" />
    </div>
</div>
        </div>
        <div className = "hero-image">
            <img src="././public/images/shoe_image.png" alt="" />
        </div>
       </main> 
    </>);
}
export default HeroSection;