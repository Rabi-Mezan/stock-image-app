import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import UploadForm from './components/uploadform';




const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

function App() {

  const [isCollaspe, setIsCollaspe] = useState(false);
  const [inputs, setInput] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [count, setCount] = useState('');


  // input box onchange handler
  const handleOnChange = (e) => {
    if (e.target.name === 'file') {
      setInput({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0])
      })
    }
    else {
      setInput({
        ...inputs,
        title: e.target.value
      })
    }
  }


  // onsubmit handler
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setItems([inputs.path, ...items])
    setInput({ title: null, file: null, path: null });
    setIsCollaspe(false)
  }

  useEffect(() => {
    setCount(`Total Image${items.length > 1 ? 's' : ''} :  ${items.length}`)
  }, [items])





  const toogle = () => setIsCollaspe(!isCollaspe)


  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>

      {/* title bar */}
      <div className="App">
        <h1 className='bg-warning py-4 display-6 fs-2'>Stock Photo Gallery <br />
          <span className='fs-6'>{count}</span></h1>
        <button onClick={toogle} className='btn btn-success mt-3 '>{isCollaspe ? "Close" : "+Add Photo"}</button>

        {/* //image upload form */}
        <div className='my-5'>
          <UploadForm
            inputs={inputs}
            isCollaspe={isCollaspe}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        </div>

        {/* gallery home image cards */}
        <div className='row m-5 d-flex justify-content-center align-items-center'>
          {
            items.map((photo, index) => <Card key={index} src={photo} />)
          }
        </div>
      </div>
    </>
  );
}

export default App;
