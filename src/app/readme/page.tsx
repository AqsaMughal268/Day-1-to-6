import React from 'react';

const Readme = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        Project Overview
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>
        <strong>Objective:</strong> Create a pixel-perfect, responsive UI based on your assigned Figma template.
      </p>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Requirements</h2>
      <ol style={{ fontSize: '16px', marginLeft: '20px', listStyleType: 'decimal' }}>
        <li>
          <strong>Framework:</strong> Use Next.js with App Router (dynamic routes).
        </li>
        <li>
          <strong>Styling:</strong> Use Custom CSS and Tailwind CSS.
        </li>
        <li>
          <strong>Backend:</strong> Not required; focus solely on UI/UX.
        </li>
        <li>
          <strong>Libraries:</strong> You may optionally use ShadCN or other libraries.
        </li>
        <li>
          <strong>Design Standard:</strong> Achieve pixel-perfect and responsive design.
        </li>
      </ol>
    </div>
  );
};

export default Readme;
