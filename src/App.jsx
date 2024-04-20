import './styles/App.css'
import './index.css'
import SplineScene from './components/SplineScene'
import Header from './components/Header'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ProjectsAPI from './components/ProjectsAPI'


function App() {

  return (
    <div>

<Header/>

 <div className='centrar mt-4'>

    <h1 className="text-3xl font-bold">
Diego Rivera Acosta`s Portfolio
    </h1>
 </div>




<div className='laptop'>
<SplineScene>
   </SplineScene>

<div className='sombra'>

</div>

</div>

<About/>





<Skills/>

{/* <Projects/> */}
<ProjectsAPI/>

<Contact/>
<Footer/>













    </div>
  )
}

export default App
