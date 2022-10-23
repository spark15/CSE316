import { Link } from 'react-router-dom';
import Navbar from './navbar'
import '../CSS/Home.css'

const Home = () => {
    return (
        <div>
            <p style={{textAlign: "center", fontSize: "40px", marginTop: "5px", marginBottom: "5px"}}>
                CourseMan
            </p>
            <br className = "break"></br>
            <Navbar />
        </div>
        );
};

export default Home;