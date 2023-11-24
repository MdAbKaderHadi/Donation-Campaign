import Logo from './Logo';
import Navlinks from './Navlinks';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-[140px] pt-[50px] relative z-10'>
            <Logo></Logo>
            <Navlinks></Navlinks>
        </div>
    );
};

export default Navbar;