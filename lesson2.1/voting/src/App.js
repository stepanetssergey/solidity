import './App.css';
import { Drizzle } from '@drizzle/store'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { drizzleOptions } from './store/DrizzleOptions'
import Loading from './components/Loading/Loading'
import TokenInfo from './components/TokenInfo/TokenInfo';
import Subjects from './components/Subjects/Subjects';
import AddSubjects from './components/AddSubjects/AddSubjects';
import AddAdmin from './components/AddAdmin/AddAdmin';


const drizzle = new Drizzle(drizzleOptions)
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  
  return (
    <DrizzleProvider drizzle={drizzle}>
      <Loading>
        <div className="App">
           <TokenInfo/>
        </div>
        <div>
          <div>Subjects</div>
          <Subjects/>
        </div>
        <div>
        <AddSubjects />
        </div>

        <div>
          Settings
          <div>
          <AddAdmin />
          </div>
        </div>
      </Loading>
    </DrizzleProvider>
  );
}

export default App;
