import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donations = () => {
    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donatedSectors = JSON.parse(localStorage.getItem("donations"));

        if(donatedSectors){
            setDonated(donatedSectors);
        }
        else{
            setNoFound("No Donation Found");
        }
    },[]);

    return (
        <div className="px-[140px] pt-[80px]">
            {noFound ? <p className="h-[60vh] flex justify-center items-center font-semibold text-3xl">{noFound}</p> : <div>
            <div className="grid grid-cols-2 gap-6">
                {
                isShow ? donated.map((singleDonated, id) => <DonationPageCard key={id} singleDonated={singleDonated}></DonationPageCard> ):
                donated.slice(0,4).map((singleDonated, id) => <DonationPageCard key={id} singleDonated={singleDonated}></DonationPageCard> )
                }
            </div>    
            </div>}
            {donated.length > 4 && <button onClick={() => setIsShow(!isShow)} className="text-white font-semibold bg-[#009444] px-[25px] py-[15px] w-fit rounded my-10 flex m-auto">{isShow ? "See Less" : "See More"}</button>}
        </div>
    );
};

export default Donations;