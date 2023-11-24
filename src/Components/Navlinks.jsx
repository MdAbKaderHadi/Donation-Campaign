import { NavLink } from 'react-router-dom';

const Navlinks = () => {
    return (
        <div>
            <ul className='flex items-center gap-x-12'>
                <li><NavLink
                    to="/"
                    style={({ isActive}) => {
                        return {
                            color: isActive ? "#FF444A" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "#FF444A" : "",
                            fontWeight: isActive ? "700" : "",
                            fontSize: "18px",
                        };
                    }}
                >
                    Home
                </NavLink></li>
                <li><NavLink
                    to="/donations"
                    style={({ isActive}) => {
                        return {
                            color: isActive ? "#FF444A" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "#FF444A" : "",
                            fontWeight: isActive ? "700" : "",
                            fontSize: "18px",
                        };
                    }}
                >
                    Donation
                </NavLink></li>
                <li><NavLink
                    to="/statistics"
                    style={({ isActive}) => {
                        return {
                            color: isActive ? "#FF444A" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "#FF444A" : "",
                            fontWeight: isActive ? "700" : "",
                            fontSize: "18px",
                        };
                    }}
                >
                    Statistics
                </NavLink></li>
            </ul>
        </div>
    );
};

export default Navlinks;