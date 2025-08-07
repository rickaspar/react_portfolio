import "../index.css";
import "../App.css";
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react"

function GithubPage() { 
  
  const [user, setUser] = useState([])
  const [urlValue, setUrlValue] = useState()
  const fetchRepos = () => {
    fetch(`https://api.github.com/users/rickaspar/repos`)
    .then((response) => (response.json()))
    .then((data) => {
        setUser(data)  
    })
  }

  useEffect(() => {
    fetchRepos()
  }, []) 


  const userElements = user.map((userElement) => {

        return (
            <div className="repo-card" style={styles.repo_card} key={userElement.id}>
                <h2 className="repo-name" style ={styles.repo_name}>{userElement.name}</h2>
                <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
                <p className="date">Start date & time: {userElement.created_at}</p>
                <p className="visibility">Visibility: {userElement.visibility}</p>
                <p >Repo URL: {userElement.url}</p>
                <a href={`https://rickaspar.github.io/${userElement.name}/`}                
                 >Go to website :  https://rickaspar.github.io/{userElement.name}/</a>

            </div>
        )
  })

  return (
      <>
        <div>
          <h3>Recent Github Projects</h3>
        </div>
        <section className="repo-container">
            {userElements}
        </section>
      </>
  )
}

const styles ={

    repo_card:{
      backgroundColor: "lightBlue",
      borderRadius: '10px',
      padding: '20px',
      margin: '20px'
    },

    repo_name: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },

    
}

export default GithubPage