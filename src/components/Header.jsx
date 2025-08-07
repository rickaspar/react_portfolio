import React from 'react'
import "../App.css"
import './Layout'

const Header = () => {
  return (
    <><h2 className='componentStyle'>React Porfolio App</h2>
    <div style={styles.topMenu}>
      <ul style={styles.topMenu}>
        {/* {renderPageLinks()} */}
      </ul>
    </div>
    </>
  )
}

const styles = {  
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header