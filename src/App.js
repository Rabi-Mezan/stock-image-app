import { useMemo, useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import { Context } from './context';






// main app componennt
function App() {
  const { state } = useContext(Context)
  const count = useMemo(() => {
    return `Total Image${state.items.length > 1 ? 's' : ''} :  ${state.items.length}`
  }, [state.items])


  return (
    <Layout>
      <div className='row m-5 d-flex justify-content-center align-items-center'>
        {
          state.items.map((items, index) => <Card key={index} {...items} />)
        }
      </div>
    </Layout>
  );
}

export default App;
