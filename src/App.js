import { useState } from 'react';
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
  const [input, setInput] = useState();
  const [items, setItems] = useState(photos)

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setItems([input, ...items])
  }


  const toogle = () => setIsCollaspe(!isCollaspe)


  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>

      <div className="App">
        {/* title */}
        <h1 className='bg-warning py-4 display-6 fs-2'>Stock Photo Gallery </h1>
        <button onClick={toogle} className='btn btn-success '>{isCollaspe ? "Close" : "+Add Photo"}</button>

        <div className='my-5'>

          <UploadForm
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
