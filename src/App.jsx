// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import GithubPage from './pages/GithubPage';
import CarouselPage from './pages/CarouselPage'


function App() {

  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
     {/*  {page === 'contact' && <ContactPage />}
      {page === 'projects' && <ProjectPage/>} */}
      {page === 'github' && <GithubPage/>}
      { page === 'carousel' && <CarouselPage/>}  

    </Layout>
  );
}

export default App;
