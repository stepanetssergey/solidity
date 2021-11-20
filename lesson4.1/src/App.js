import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import Header from './components/Header';
import SignMessage from './components/SignMessage';




function App() {

  

 
  function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }


  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="App">
      <div>
        <Header/>

      </div>
      <SignMessage/>
    </div>
    </Web3ReactProvider>
  );
}

export default App;
