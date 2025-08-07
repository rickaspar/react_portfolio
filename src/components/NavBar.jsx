import "../App.css"
const NavBar = () => {
  return (
    <nav 
    //style={styles.navbar}
    className="componentStyle"
    >
        <h3>Portfolio React App</h3>
      </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default NavBar