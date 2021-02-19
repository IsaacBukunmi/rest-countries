import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Details from './pages/details';
import Home from './pages/home';


const App = () => {

  const getStorageTheme = () => {
    let theme = 'light-theme'
    if(localStorage.getItem('theme')){
       theme = localStorage.getItem('theme')
    }
    return theme
  }

  const [theme, setTheme] = useState(getStorageTheme)
  
  const toggleTheme = () => {
    return(
      theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
    )
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return(
    <div>
      <Nav toggleTheme={toggleTheme} theme={theme}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path= "/country/:name" children={Details} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
