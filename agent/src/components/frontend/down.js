// src/App.js

import React from 'react';

const Down = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#293A4A',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    message: {
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      color: '#e44d26', // Use your preferred color
    },
    p: {
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <h1 style={styles.h1}>This Account has been Suspended</h1>
        <p style={styles.p}>Please contact your hosting provider support for assistance.</p>
      </div>
    </div>
  );
};

export default Down;
