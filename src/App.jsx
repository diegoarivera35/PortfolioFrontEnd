
import { useEffect } from "react";
import "./styles/App.css";
import "./index.css";
import SplineScene from "./components/SplineScene";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import ProjectsAPI from "./components/ProjectsAPI";

function App() {
    useEffect(() => {
      // Function to display alert with portfolio1 content when the page loads
      const displayFirstPortfolioAlert = () => {
        const portfolioContent1 = document.querySelector(".portfolio1").textContent;
        alert(portfolioContent1);
  
        // After the first alert is closed, display the second alert
        displaySecondPortfolioAlert();
      };
  
      // Function to display alert with portfolio2 content
      const displaySecondPortfolioAlert = () => {
        const portfolioContent2 = document.querySelector(".portfolio2").textContent;
        alert(portfolioContent2);
      };
  
      // Call the function to display the first alert when the page finishes loading
      window.addEventListener("load", displayFirstPortfolioAlert);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener("load", displayFirstPortfolioAlert);
      };
    }, []);
  return (
    <div className="padre">
      <Header />

      <div className="line-numbers">
   1  <br/>
   2  <br/>
   3  <br/>
   4  <br/>
   5  <br/>
   6  <br/>
   7  <br/>
   8  <br/>
   9  <br/>
   10  <br/>
   11  <br/>
   12  <br/>
   13  <br/>
   14  <br/>
   15  <br/>
   16  <br/>
   17  <br/>
   18  <br/>
   19  <br/>
   20  <br/>
   21  <br/>
   22  <br/>
   23  <br/>
   24  <br/>
   25  <br/>
   26  <br/>
   27  <br/>
   28  <br/>
   29  <br/>
   30  <br/>
   31  <br/>
   32  <br/>
   33  <br/>
   34  <br/>
   35  <br/>
   36  <br/>
   37  <br/>
   38  <br/>
   39  <br/>
   40  <br/>
   41  <br/>
   42  <br/>
   43  <br/>
   44  <br/>
   45  <br/>
   46  <br/>
   47  <br/>
   48  <br/>
   49  <br/>
   50  <br/>
   51  <br/>
   52  <br/>
   53  <br/>
   54  <br/>
   55  <br/>
   56  <br/>
   57  <br/>
   58  <br/>
   59  <br/>
   60  <br/>
   61  <br/>
   62  <br/>
   63  <br/>
   64  <br/>
   65  <br/>
   66  <br/>
   67  <br/>
   68  <br/>
   69  <br/>
   70  <br/>
   71  <br/>
   72  <br/>
   73  <br/>
   74  <br/>
   75  <br/>
   76  <br/>
   77  <br/>
   78  <br/>
   79  <br/>
   80  <br/>
   81  <br/>
   82  <br/>
   83  <br/>
   84  <br/>
   85  <br/>
   86  <br/>
   87  <br/>
   88  <br/>
   89  <br/>
   90  <br/>
   91  <br/>
   92  <br/>
   93  <br/>
   94  <br/>
   95  <br/>
   96  <br/>
   97  <br/>
   98  <br/>
   99  <br/>
   100  <br/>
   101  <br/>
 102  <br/>
 103  <br/>
 104  <br/>
 105  <br/>
 106  <br/>
 107  <br/>
 108  <br/>
 109  <br/>
 110  <br/>
 111  <br/>
 112  <br/>
 113  <br/>
 114  <br/>
 115  <br/>
 116  <br/>
 117  <br/>
 118  <br/>
 119  <br/>
 120  <br/>
 121  <br/>
 122  <br/>
 123  <br/>
 124  <br/>
 125  <br/>
 126  <br/>
 127  <br/>
 128  <br/>
 129  <br/>
 130  <br/>
 131  <br/>
 132  <br/>
 133  <br/>
 134  <br/>
 135  <br/>
 136  <br/>
 137  <br/>
 138  <br/>
 139  <br/>
 140  <br/>
 141  <br/>
 142  <br/>
 143  <br/>
 144  <br/>
 145  <br/>
 146  <br/>
 147  <br/>
 148  <br/>
 149  <br/>
 150  <br/>
 151  <br/>
 152  <br/>
 153  <br/>
 154  <br/>
 155  <br/>
 156  <br/>
 157  <br/>
 158  <br/>
 159  <br/>
 160  <br/>
 161  <br/>
 162  <br/>
 163  <br/>
 164  <br/>
 165  <br/>
 166  <br/>
 167  <br/>
 168  <br/>
 169  <br/>
 170  <br/>
 171  <br/>
 172  <br/>
 173  <br/>
 174  <br/>
 175  <br/>
 176  <br/>
 177  <br/>
 178  <br/>
 179  <br/>
 180  <br/>
 181  <br/>
 182  <br/>
 183  <br/>
 184  <br/>
 185  <br/>
 186  <br/>
 187  <br/>
 188  <br/>
 189  <br/>
 190  <br/>
 191  <br/>
 192  <br/>
 193  <br/>
 194  <br/>
 195  <br/>
 196  <br/>
 197  <br/>
 198  <br/>
 199  <br/>
 200  <br/>

</div>



      <div className="centrar marginTop" id="anchor_about">
  <h1 className="htmlTitle">
    <p className="izquierdo">&lt;</p>
    <p className="h1">h1</p>
    <p className="derecho">&gt;</p>
    Diego Rivera`s Portfolio
    <p className="izquierdo">&lt;&frasl;</p>
    <p className="h1">h1</p>
    <p className="derecho">&gt;</p>
  </h1>
</div>

<p className="portfolio1">/* This portfolio showcases some of my skills as a Web Developer and UX/UI Designer. You will find projects utilizing JavaScript, the DOM, PHP, APIs, and designs created in Figma, among other tools.*/</p>

<p className="portfolio2">
 /*This portfolio website itself is a demonstration of my abilities, featuring a front-end built with React and a back-end developed with Node.js and Express.js. The projects are stored in a MongoDB database and are rendered on the front end using a REST API. Finally, the portfolio is deployed using AWS Cloud services.*/</p>


      <div className="Hero">
        <About className="Bio"/>


      </div>

      <div className="skills_container">

      <div className="laptop">

          <SplineScene></SplineScene>

          <div className="sombra"></div>
        </div>
      <Skills className="languages"/>
      </div>

      {/* <Projects/> */}
      <ProjectsAPI />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
