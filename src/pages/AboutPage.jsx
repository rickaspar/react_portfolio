// AboutPage.js
import React from 'react';
import '../App.css'
import myPic from '../assets/portfolio_pic.jpg';

const AboutPage = () => {
  return (
    <><div>
      <h3>About Me</h3>
    </div>
    <div style={styles.main}>
      <img src={myPic} alt='myPic' style={styles.img}></img>
      <p style={styles.p}>Hard working family man with plenty of life experience...
        gets it wrong occasionally! A dedicated professional currently
        immersed in a BCS-accredited web development bootcamp with Step8Up,
        showcasing strong programming skills through the creation of an
        interactive web page using HTML, CSS, and JavaScript.
        Proficient in Python for problem-solving and data analysis.
        Leveraging experience from the medical field to excel under pressure,
        maintain clear communication, and demonstrate respect and dignity towards
        individuals in vulnerable situations.</p>
    </div></>
  );
};

const styles ={
    main: {
    display: 'flex',
    flexDirection: 'row',
    },

    p: {
      margin: '10px',
    },

    img: {
      margin:'10px',
      borderRadius:'20px'
    }
}



export default AboutPage;
