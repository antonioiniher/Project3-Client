import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import NewUser from './pages/NewUser/NewUser'

function App() {

  return (

    <div className='App'>

      <Navigation />
      <AppRoutes />
      <Footer />

    </div >

  )
}


export default App
