import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Projects, Contacts} from './pages'

function App() {

  return (
    <>
      <main className='bg-slate-300/20 h-full'>
       <Router>
        <Navbar/> 

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
        </Routes>

       </Router>
      </main>
    </>
  )
}

export default App
