import React from 'react';
import './App.css';
import "./Productivepet.css"; 

function Productivepet() {
    return (
      <div className="Productive-pet">
        <img src={require('./cat.png')} alt="cat"/>
      </div>
    );
  }
  
  export default Productivepet;