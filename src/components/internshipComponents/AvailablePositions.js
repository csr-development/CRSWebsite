import { Link } from 'react-router-dom';
import "../CSS/AvailablePosition.css";

export default function AvailablePositions() {
/**
 * @var {openPositions} String - Position names that are currently open
 * .map checks every item/position in the array above and create a component for it.
 */

let openPositions = ["Website Designer", "Grant Writer", "Finance Director"];

        return(
            <div style={{ textAlign: "center", margin:"30px"}}>
                    <p style={{ color: "#a00", fontSize: "45px", fontWeight: "bold", paddingTop: "10px" }}>
                    Available Positions
                    </p>
                    <div style={{ border: "0.1px solid #ccc", width: "50px", margin: "auto" }}></div>
                    <div id="AvailablePositions">
                    {
                        openPositions.map((item, index) => {
                            let str = item.replace( /\s/g, '');
                            return(
                                <div className="card" key={index}>
                                <p className='position'>{item}</p>
                                <img src={require(`../../images/Internships/${str}.jpg`).default} alt={item}/>
                                <div className="content">
                                <Link to={"/"+ str}>
                                <button>FIND  OUT  MORE</button>
                                </Link>
                                </div>
                            </div>)
                        }

                        )}
                    </div>
            </div>        
        )
   
}