import './App.css';
import { Drizzle } from '@drizzle/store'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { drizzleOptions } from './store/DrizzleOptions'
import Loading from './components/Loading/Loading'
import TokenInfo from './components/TokenInfo/TokenInfo';
import Subjects from './components/Subjects/Subjects';
import AddSubjects from './components/AddSubjects/AddSubjects';
import AddAdmin from './components/AddAdmin/AddAdmin';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import Header from './components/Header';





const drizzle = new Drizzle(drizzleOptions)
const { DrizzleProvider } = drizzleReactHooks;

function App() {

  function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
  
  return (
    <DrizzleProvider drizzle={drizzle}>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Loading>
      <Header/>
      <div>
        <div className="App">
           <TokenInfo/>
        </div>
        <div>
          <div>Subjects</div>
          <Subjects/>
        </div>
      
        <div style={{marginTop:'2rem'}}>
        <AddSubjects />
        </div>

        <div>
          Settings
          <div style={{marginTop:'2rem'}}>
          <AddAdmin />
          </div>
        </div>
      </div>
      </Loading>
      </Web3ReactProvider>
    </DrizzleProvider>
  );
}

export default App;
