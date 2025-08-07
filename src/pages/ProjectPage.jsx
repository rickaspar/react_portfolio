// ProjectPage.jsx
import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function ProjectPage() {
  const [maxLength, setMaxLength] = useState(10);
  const [projectFacts, setProjectFacts] = useState([]);
  const [error, setError] = useState(null);

  const [githubUsername, setGithubUsername] = useState();

  // Handles input changes
  const handleChange = (e) => {
    setMaxLength(e.target.value);
  };

  // Handles search click to get status info
  const handleSearch = async () => {

    console.log(maxLength);
    
    if (!maxLength) {
      setError("Please enter a Maximum Length.");
      return;
    }
    setError(null); // Clear previous error
    try {
      const response = await axios.get(`https://catfact.ninja/facts?limit=${maxLength}`);
      
      // destructure the data from the response
      const { data } = response.data
      console.log(response.data);

      setProjectFacts(data);
    } catch (err) {
      setError("Could not retrieve information. Please check the status code.");
      setStatusInfo(null);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>

      <h1>Project Facts</h1>
      <h3>{githubUsername}</h3>
      <input
        type="number"
        placeholder="Enter the number of project facts you'd like"
        value={maxLength}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', marginTop: '10px', width: '100%' }}>
        Search
      </button>

        { error && <div>
          <p>there is an error</p>
        </div>
        }
      
        { projectFacts ? 
        (<div style={{ marginTop: '20px' }}>
          <h2>Here are {projectFacts.length} Project Facts</h2>
          <ul>
            {projectFacts.map((fact, index) => (
              <li key={index}>{fact.fact}</li>
            ))}
          </ul>
        </div>) : (<div><p>not data</p></div>)
         }
      
    </div>
  );
}


export default ProjectPage;
