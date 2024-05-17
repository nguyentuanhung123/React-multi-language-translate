
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='flex justify-center items-center'>
            <Link to={'/'} className='p-4 bg-green-400 cursor-pointer flex justify-center items-center'>Home</Link>
            <Link to={'/dashboard'} className='p-4 bg-green-400 cursor-pointer flex justify-center items-center'>Dashboard</Link>
            <Link to={'/contactus'} className='p-4 bg-green-400 cursor-pointer flex justify-center items-center'>Contact Us</Link>
            <Link to={'/aboutus'} className='p-4 bg-green-400 cursor-pointer flex justify-center items-center'>About Us</Link>
        </div>
    )
}

export default Menu
