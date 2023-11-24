import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/"><div className='flex items-center'>
            <img className='w-[72px] mr-5' src="https://i.ibb.co/nkGHRWj/Group.png" alt="Logo" />
            <div>
                <h1 className='text-[#FF444A] text-4xl font-bold'>Donation</h1>
                <p className='text-[#0B0B0BB2] text-lg font-medium tracking-[10.5px]'>Campaign</p>
                
            </div>
           
        </div> </Link>
    );
};

export default Logo;