import { NavLink } from 'react-router-dom'

function Navbar() {

    return (

        <div>

            <NavLink style={({isActive}) => isActive ? { fontStyle: 'italic', color: "white" } : null } to="/">Home</NavLink>


            <NavLink style={({isActive}) => isActive ? { fontStyle: 'italic', color: "white" } : null } to="/favorites">Favorites</NavLink>

        </div>

)

}

export default Navbar