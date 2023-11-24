import React from 'react';

const SearchSection = ({ handleSearch }) => {
    return (
        <div className="relative -top-48">
            <div className="hero h-[800px]" style={{backgroundImage: 'url(https://i.ibb.co/vH1s8Ss/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)'}}>
                <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-100"></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div>
                        <h1 className="mb-10 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div>
                            <form onSubmit={handleSearch}>
                                <input type="text" name="searchbar" placeholder="Search here" className="input input-bordered focus:border-solid focus:outline-0 h-[50px] w-full max-w-[360px] rounded-r-none rounded-br-none text-black" />
                                <input type="submit" value="Search" className="w-[110px] h-[50px] rounded-r-lg rounded-br-lg bg-[#FF444A] font-semibold text-base text-white"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
