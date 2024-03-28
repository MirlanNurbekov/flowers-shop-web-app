import React from 'react';

const AboutDummy = React.forwardRef((props, ref) => {

  const handleClick = () => {
    alert("This is a dummy function for testing!");
  };

  return (
    <div ref={ref}>
      <h2>Dummy About Component</h2>
      <button onClick={handleClick}>Test Button</button>
    
    </div>
  );
});

const App = () => {
  const aboutRef = React.useRef(null);

  return (
    <div>
      <h1>Dummy Test Page for About Component</h1>
      <p>This page is only for testing purposes and does not affect the actual application.</p>
      <AboutDummy ref={aboutRef} />
    </div>
  );
};


export default App;