import { useMemo, useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import { Context } from './context';
import Firestore from './handlers/firestore';




const { readDocs } = Firestore;


// main app componennt
function App() {
  const { state, read } = useContext(Context)
  const count = useMemo(() => {
    return `Total image${state.items.length > 1 ? 's' : ''} ${state.items.length} `
  }, [state.items])


  useEffect(() => {
    read()
  }, [])


  return (
    <Layout count={count}>

      <div className='row row-cols-1 row-cols-md-3 border-0 g-4 m-5'>
        {
          state.items.map((items, index) => <Card key={index} {...items} />)
        }
      </div>
    </Layout>
  );
}

export default App;
