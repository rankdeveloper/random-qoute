import React from 'react';
import Colors from './Colors';
import './style.css';

export default function App() {
  const [qoute, setQoute] = React.useState({
    text: 'You really can change the world if you care enough.',
    author: 'Marian Edelman',
  });
  const [allQoute, setAllQoute] = React.useState([]);
  React.useEffect(() => {
    async function getting() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setAllQoute(data);
    }
    getting();
  }, []);

  function getQoute() {
    const qoutesArray = allQoute;
    const randomNum = Math.floor(Math.random() * qoutesArray.length);
    const randomColor = Math.floor(Math.random() * Colors.length);
    const randomQoute = qoutesArray[randomNum];

    //setting color
    document.getElementById(
      'container'
    ).style.backgroundColor = `${Colors[randomColor]}`;
    document.getElementById(
      'container-inner'
    ).style.color = `${Colors[randomColor]}`;
    document.getElementById(
      'btn'
    ).style.backgroundColor = `${Colors[randomColor]}`;

    console.log(randomQoute);
    setQoute((prevState) => randomQoute);
  }

  return (
    <div className="qoute-container" id="container">
      <div className="qoute-container-inner" id="container-inner">
        <div className="qoute">
          <h4>
            <span>
              <i class="fa-solid fa-quote-left"></i>
            </span>
            {qoute.text}
          </h4>
        </div>
        <div className="author">
          <p>{qoute.author}</p>
        </div>

        <div className="button">
          {' '}
          <button onClick={getQoute} className="btn" id="btn">
            New qoute
          </button>
        </div>
      </div>
    </div>
  );
}
// developed by rankdeveloper
