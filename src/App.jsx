import { 
  Home, 
  Navbar, 
  Courses, 
  About, 
  Contact, 
  Footer, 
  Teacher 
} from "./Components/index"

function App() {

  return (


    <div className='font-Kanit bg-Solitude'>

      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />

    </div>


  )
}

export default App
