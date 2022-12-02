import './App.css';
import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import SecretPage from './component/SecretPage';

function App() {
  const answer = "Sortez couvert pas qu'en hiver";
  const [mauvaiseReponse,setMauvaiseReponse] = useState(false);
  const [reponse,setReponse] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
      setReponse(e.target.value);
  }

  const checkResponse = () => {
      if(reponse == answer){
        navigate('/secret');
        setMauvaiseReponse(false);
      }else {
        setMauvaiseReponse(true);
      }
  }
  
  return (
    <div className="App">
        <Link to="/intro" relative="path">Enigme 1</Link><br/>
				<Link to="/quatreimageunmot" relative="path">Enigme 2</Link><br/>
				<Link to="/crossword" relative='path'>Enigme 3</Link><br/>	
				<Link to="/expressionmath" relative="path">Enigme 4</Link><br/>
				<Link to="/ivert" relative="path">Enigme 5</Link><br/>

<h1>Un mot par énigme, à vous de retouver la bonne phrase</h1>
        <form onSubmit={checkResponse} >
          <input type="text" value={reponse} onChange={handleChange} style={{width: "500px"}} />
          <input type="submit" value="Envoyer"/>
        </form>
        {mauvaiseReponse ? <p>Mauvaise réponse</p> : <></>}
    </div>
  );
}

export default App;
