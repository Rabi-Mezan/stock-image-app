import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';



const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>

      <div className="App">
        {/* title */}
        <h1 className='bg-warning py-4 display-6 fs-2'>Stock Photo Gallery</h1>

        {/* gallery home image cards */}
        <div className='row m-5 d-flex justify-content-center align-items-center'>
          {
            photos.map((photo) => <Card src={photo} />)
          }
        </div>
      </div>
    </>
  );
}

export default App;
