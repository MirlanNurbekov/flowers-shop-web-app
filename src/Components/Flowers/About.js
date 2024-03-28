import React from 'react';
import "./About.css";

// Sample data for the flowers
const flowersData = [
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5522D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696967926&width=768",
    alt: "Birthday Bash Bouquet",
    title: "Birthday Bash Bouquet",
    description: "$60 - 80",
    moreInfo: "A vibrant bouquet perfect for celebrating all the special moments."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5544D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1705430064&width=768",
    alt: "Sweet As Can Be Bouquet",
    title: "Sweet As Can Be Bouquet",
    description: "$55 - $75",
    moreInfo: "A sweet arrangement that brings a smile to anyone's face."
  },
  // Add more flower data here...
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
          body { font-family: Arial, sans-serif; padding: 20px; }
          .container { text-align: center; }
          img { width: 50%; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>${flower.title}</h2>
          <img src="${flower.src}" alt="${flower.alt}">
          <p>${flower.description}</p>
          <p>${flower.moreInfo}</p>
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <div className="about-section-container" ref={ref}>
      <div className="about-section-text-container">
        <p className="primary-subheading">Flowers</p>

        <div className="box">
          {flowersData.map((flower, index) => (
            <div key={index} className="flower-item" onClick={() => openFlowerDetail(flower)}>
              <img src={flower.src} alt={flower.alt} style={{ cursor: 'pointer' }} />
              <div className="box_title">{flower.title}</div>
              <div className="box_description">{flower.description}</div>
            </div>
          ))}
        </div>

        {/* Continue with your other sections here... */}
      </div>
    </div>
  );
});

export default About;
