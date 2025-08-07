import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import MainSection from './MainSection';
import "../App.css"

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
 /*  { name: 'Contact', key: 'contact' },
  { name: 'Projects', key:'projects'}, */
  { name: 'Github', key:'github'},
   {name: 'Carousel', key:'carousel'}
]

const Layout = ({ children, selectedPage, onSetPage }) => {

  const renderPageLinks = () => {
        
    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }


  return (
    
    <div style={styles.container}>

      {/*Header */}
      <Header />
      <div style={styles.topMenu}>
        <ul style={styles.topMenu}>
            {renderPageLinks()}
        </ul>
      </div>

      {/* Navigation */}
      {/* <NavBar /> */}
  
      <div style={styles.main}>


      {/*MainSection*/}
      {/* <MainSection/> */}

      {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  header: {
    backgroundColor:'#444'
  },

  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'flex',
    flexDirection:'row',
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },

  topMenu:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:"#f4f4f4",
  },

  topmenuLink:{
    display:'flex',
    flexDirection: 'row',
    padding:'10px',
    backgroundColor:'#666', 
    textDecoration: 'none',
  }
};

export default Layout;
