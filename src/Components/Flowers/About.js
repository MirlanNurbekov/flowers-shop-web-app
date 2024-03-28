import React from 'react';
import "./About.css";

// Sample data for the flowers
const flowersData = [
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5522D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696967926&width=768",
    alt: "Birthday Bash Bouquet",
    title: "Birthday Bash Bouquet",
    description: "$60 - 80$",
    moreInfo: "A vibrant bouquet perfect for celebrating all the special moments."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5520D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696963744&width=768",
    alt: "Light of My Life Bouquet",
    title: "Light of My Life Bouquet",
    description: "$55 - $85",
    moreInfo: "Illuminate your loved one's day with this colorful arrangement."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5544D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1705430064&width=768",
    alt: "Sweet As Can Be Bouquet",
    title: "Sweet As Can Be Bouquet",
    description: "$55 - $75",
    moreInfo: "A sweet arrangement that brings a smile to anyone's face."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5520D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696963744&width=768",
    alt: "Pinkies Up Bouquet",
    title: "Pinkies Up Bouquet",
    description: "$60 - $80",
    moreInfo: "Elegant and refined, this bouquet is perfect for the sophisticated individual in your life."
  },
  // Add more flower data
];

const About = React.forwardRef((props, ref) => {
  const openFlowerDetail = (flower) => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${flower.title}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 40px;
          background-color: #f9f9f9;
          color: #333;
        }
        .container {
          max-width: 300px;
          margin: auto;
          background: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          border-radius: 8px;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .title {
          color: #007BFF;
          margin-top: 20px;
        }
        .description {
          color: #555;
          font-size: 18px;
          margin: 20px 0;
        }
        .more-info {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="${flower.src}" alt="${flower.alt}">
        <h2 class="title">${flower.title}</h2>
        <p class="description">${flower.description}</p>
        <p class="more-info">${flower.moreInfo}</p>
      </div>
    </body>
    </html>
  `);
  newWindow.document.close();
  };

  return (
    <div className="about-section-container" ref={ref}>
      <div className="about-section-text-container">
        <p className="primary-subheading">Choices for you</p>

        <div className="box">
          {flowersData.map((flower, index) => (
            <div key={index} className="flower-item" onClick={() => openFlowerDetail(flower)} style={{ cursor: 'pointer' }}>
              <img src={flower.src} alt={flower.alt} />
              <div className="box_title">{flower.title}</div>
              <div className="box_description">{flower.description}</div>
            </div>
          ))}
        </div>

        <div className="about-text2">
        <div className="green1">
          <h1>with sympathy</h1>
          <h4>Send comfort with a thoughtful arrangement.</h4>
          <button className='buttongreen1'>SHOP SYMPATHY</button>
        </div>
      </div>   
<br/>
<br/>
        <section className="sec3">
          <div className="information_container"> 
            <div className="info1"> 
              <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/C5375D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1706291426&width=768" alt="Our Beginnings" /> 
              <div> 
                <h2>Our Beginnings</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div> 
            </div> 
            <div className="info2"> 
              <img src="https://cdn.shopify.com/s/files/1/0507/3754/5401/files/YPBD_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1706296518&width=768" alt="Our Philosophy" /> 
              <div> 
                <h2>Our Philosophy</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div> 
            </div> 
          </div> 
        </section>
        <br/>
        <br/>
      </div>
      <div className="about-text2">
      <div className="green2">
          <h1>Bloom & Wild x Liberty</h1>
          <h4>We designed these bloom lorem ipsum dolor sit amet consectetur adipisicing elit...</h4>
          <button className="buttongreen2">Find out more</button>
        </div>
    </div>
    </div>
    
  );
});

export default About;