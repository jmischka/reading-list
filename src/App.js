import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header';
import ReadingList from './components/ReadingList';
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #383A40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    line-height: 1.3;
    padding: 210px 0 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -ms-word-break: break-all;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
`

function App() {
  const [formData, setFormData] = useState({imageUrl: '', sourceUrl: '', title: ''});
  const [listItems, setListItems] = useState([]);
  
  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.imageUrl.length < 5 || formData.sourceUrl.length < 5 || formData.title.length < 2) {
      alert('Please make sure all fields are filled out');
    } else {
      setListItems([...listItems, formData]);
      setFormData({imageUrl: '', sourceUrl: '', title: ''});
    } 
  }

  useEffect(() => {
    const data = localStorage.getItem('my-reading-list');
    if (data) {
      setListItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my-reading-list', JSON.stringify(listItems));
  });

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Header imageUrl={formData.imageUrl} sourceUrl={formData.sourceUrl} title={formData.title} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        <ReadingList listItems={listItems} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;