import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/contact/Contact';
import { useState,useEffect } from 'react';
import Footer from './components/footer/Footer';


function App() {

  const [theme, setTheme] = useState('dark');
  const [fontColor,setFontColor] = useState('black')
  const [bgColor,setBgColor] = useState('rgba(60, 66, 71)')

  useEffect(() => {
    
  if(theme === 'dark'){
    setFontColor('white');
    setBgColor('rgba(60, 66, 71)')
  }else{
    setFontColor('black');
    setBgColor('white')
  }
   
  }, [theme]);

  const setThemeSelection = (darkTheme) => {
    console.log('Theme changed',darkTheme)
    if(darkTheme){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }
  
  return (
    <>
      <Router basename='/site'>
        <Header changeThemeHandler={setThemeSelection} color={fontColor} backgroundColor={bgColor} />

        <Switch>
          <Route exact path="/">
            <About color={fontColor} backgroundColor={bgColor}/>
          </Route>
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer color={fontColor} backgroundColor={bgColor}/>
      </Router>

    </>
  );
}

export default App;
