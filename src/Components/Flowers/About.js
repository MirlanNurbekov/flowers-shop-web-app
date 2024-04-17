import React, { useState } from 'react';
import "./About.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const flowersData = [
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5522D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696967926&width=768",
    alt: "Birthday Bash Bouquet",
    title: "Birthday Bash Bouquet",
    description: "$60 - 80$",
    moreInfo: "Indulge in the vibrant celebration of our 'Birthday Bash Bouquet'. Bursting with a kaleidoscope of colors and textures, this delightful arrangement is a jubilant expression of joy and festivity. Radiant blooms of cheerful daisies, playful carnations, and charming chrysanthemums dance together in perfect harmony, creating a spirited display that embodies the essence of a birthday celebration. Each petal whispers tales of happiness and good wishes, while the lush greenery adds a touch of freshness and vitality. Whether it's for a friend, family member, or loved one, the 'Birthday Bash Bouquet' is a delightful surprise that will make their special day even more memorable. Share the joy and spread smiles with this enchanting bouquet, crafted to make every birthday bash unforgettable."
    
  },
  
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5520D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696963744&width=768",
    alt: "Light of My Life Bouquet",
    title: "Light of My Life Bouquet",
    description: "$55 - $85",
    moreInfo: "Immerse yourself in the enchanting beauty of our 'Light of My Life Bouquet'. This exquisite arrangement combines a harmonious blend of vibrant roses, delicate lilies, and fragrant freesias, meticulously handcrafted to captivate the senses and evoke feelings of joy and admiration. Each stem is carefully selected to showcase nature's finest hues, from the soft blush of the roses to the pristine white of the lilies, creating a mesmerizing symphony of colors. Perfect for expressing love, gratitude, or celebration, this stunning bouquet is a timeless expression of elegance and sophistication. Elevate any occasion with the sublime beauty of our 'Light of My Life Bouquet'."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5544D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1705430064&width=768",
    alt: "Sweet As Can Be Bouquet",
    title: "Sweet As Can Be Bouquet",
    description: "$55 - $75",
    moreInfo: "Indulge in the sweetness of our 'Sweet As Can Be Bouquet', a charming arrangement that embodies pure delight and innocence. Overflowing with tenderness and grace, this bouquet features an enchanting ensemble of soft pastel blooms and delicate greens, reminiscent of a tranquil garden in full bloom. Each stem, from the blushing roses to the delicate baby's breath, exudes a gentle allure, creating an atmosphere of warmth and affection. As the fragrance of the flowers fills the air, it evokes memories of sunny days and carefree moments. Whether given as a gesture of love, friendship, or appreciation, the 'Sweet As Can Be Bouquet' is sure to touch hearts and uplift spirits. Let its beauty and sweetness brighten any occasion and spread joy to all who behold it."
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/files/R5520D_LOL_preset_proflowers-mx-tile-wide-sv-new.jpg?v=1696963744&width=768",
    alt: "Pinkies Up Bouquet",
    title: "Pinkies Up Bouquet",
    description: "$60 - $80",
    moreInfo: "Step into a world of elegance and refinement with our 'Pinkies Up Bouquet'. This sophisticated arrangement exudes grace and style, making it the epitome of timeless beauty. Delicate pink blooms, including roses, lilies, and peonies, mingle gracefully with touches of lush greenery, creating a picture-perfect ensemble that captures the essence of sophistication. Each petal unfurls with poise and charm, while the subtle fragrance fills the air with a sense of luxury and indulgence. Whether adorning a formal gathering or adding a touch of refinement to everyday life, the 'Pinkies Up Bouquet' elevates any occasion with its understated elegance. Treat yourself or someone special to the luxury of this exquisite bouquet and let its beauty inspire moments of pure delight and admiration."
  },
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
  
];


const About = React.forwardRef((props, ref) => {
  const [flowerDetailOpen, setFlowerDetailOpen] = useState(false);
  const [paymentFormOpen, setPaymentFormOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);

  const openFlowerDetail = (flower) => {
    setSelectedFlower(flower);
    setFlowerDetailOpen(true);
  };

  const handleFlowerDetailClose = () => {
    setFlowerDetailOpen(false);
  };

  const handlePurchase = () => {
    setPaymentFormOpen(true);
    setFlowerDetailOpen(false);
  };

  const handlePaymentFormClose = () => {
    setPaymentFormOpen(false);
  };

  const handleFormSubmit = () => {
    // Implement your payment processing logic here
    setPaymentFormOpen(false);
    setThankYouOpen(true);
  };

  return (
    <div className="about-section-container" ref={ref}>
    <div className="about-section-text-container">
      <p className="primary-subheading">Choices for you</p>
      <div className="box">
        {flowersData.map((flower, index) => (
          <div key={index} className="flower-item" onClick={() => openFlowerDetail(flower)} style={{ cursor: 'pointer' }}>
            <img src={flower.src} alt={flower.alt} style={{ width: '100%' }}/>
            <div className="box_title">{flower.title}</div>
            <div className="box_description">{flower.description}</div>
          </div>
        ))}
      </div>
    </div>
      <Dialog open={flowerDetailOpen} onClose={handleFlowerDetailClose}>
        <DialogTitle>
          {selectedFlower?.title}
          <IconButton aria-label="close" onClick={handleFlowerDetailClose} style={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img src={selectedFlower?.src} alt={selectedFlower?.alt} style={{ maxWidth: '100%' }} />
          <p>{selectedFlower?.description}</p>
          <p>{selectedFlower?.moreInfo}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePurchase}>Purchase</Button>
        </DialogActions>
      </Dialog>

      {/* Payment Form Modal */}
      <Dialog open={paymentFormOpen} onClose={handlePaymentFormClose}>
        <DialogTitle>Enter Payment Details</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Cardholder Name" type="text" fullWidth />
          <TextField margin="dense" id="cardNumber" label="Card Number" type="text" fullWidth />
          {/* Add additional fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* "Thank You" Modal */}
      <Dialog open={thankYouOpen} onClose={() => setThankYouOpen(false)}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          Your purchase has been completed successfully.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setThankYouOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default About;