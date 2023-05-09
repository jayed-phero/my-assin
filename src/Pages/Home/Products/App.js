import React, { useState } from 'react';
//import './styles.css'; // import your tailwind css file

function Card({ title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    transition: 'all 0.3s',
    transform: isHovered ? 'translateX(-100px)' : 'none',
  };

  return (
    <div
      className="w-64 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center mt-8 max-w-6xl mx-auto">
      <Card title="Card 1" description="This is the description of card 1." />
      <Card title="Card 2" description="This is the description of card 2." />
      <Card title="Card 3" description="This is the description of card 3." />
    </div>
  );
}

export default App;
