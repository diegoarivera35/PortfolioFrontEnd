
import "../styles/App.css";
const Studies = () => {
    return (

<div className="centrar" id="anchor_studies">



<div className="">
  <h2 className="htmlTitle">
    <span className="izquierdo">&lt;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
    Studies
    <span className="izquierdo">&lt;&frasl;</span>
    <span className="h2">h2</span>
    <span className="derecho">&gt;</span>
  </h2>
</div>





    <div className="education-container">
    <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>Year</th>
            <th>Institution</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Program">Web Development</td>
            <td data-label="Year">2023 - In Progress</td>
            <td data-label="Institution">Humber College</td>
            <td data-label="Location">Toronto, Canada</td>
          </tr>
          <tr>
            <td data-label="Program">Marketing Diploma</td>
            <td data-label="Year">2019</td>
            <td data-label="Institution">Partners Academy</td>
            <td data-label="Location">Bogotá, Colombia</td>
          </tr>

          <tr>
            <td data-label="Program">English</td>
            <td data-label="Year">2011 - 2012</td>
            <td data-label="Institution">London Meridian College LLP</td>
            <td data-label="Location">London, UK</td>
          </tr>

          <tr>
            <td data-label="Program">Industrial Design</td>
            <td data-label="Year">2004 - 2009</td>
            <td data-label="Institution">Los Andes University</td>
            <td data-label="Location">Bogotá, Colombia</td>
          </tr>                    
        </tbody>
      </table>
    </div>





    </div>
    );
};

export default Studies;