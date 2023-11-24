import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const Details = () => {

    const [detailsData, setDetailsData] = useState([]);
    const [singleCardData, setSingleCardData] = useState();

    const { id } = useParams();
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(getDetailsData => setDetailsData(getDetailsData))
    }, []);

    useEffect(() => {
        const filterDetailsData = detailsData.find(singleDetailsData => singleDetailsData.id === parseFloat(id));
        setSingleCardData(filterDetailsData);
    }, [detailsData, id])

    // const handleDonate = () => {
    //     const addedDonationsArray = [];

    //     const donations = JSON.parse(localStorage.getItem("donations"));

    //     if(!donations){
    //         addedDonationsArray.push(singleCardData);
    //         localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
    //         alert("donated");
    //     }
    //     else{
    //         const isExists = donations.find((singleCardData) => singleCardData.id === id);

    //         if(!isExists){
    //             addedDonationsArray.push(...donations, singleCardData);
    //             localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
    //             alert("Donated");
    //         }
    //         else{
    //             alert("duplicate")
    //         }
    //     }
    // }

    const successNotify = () => toast.success('Donated Successfully!');

    const handleDonate = () => {
        const donations = JSON.parse(localStorage.getItem("donations")) || [];
        const isExists = donations.find((donation) => donation.id === singleCardData.id);

        if (!isExists) {
            const updatedDonationsArray = [...donations, singleCardData];
            localStorage.setItem("donations", JSON.stringify(updatedDonationsArray));
            toast.success('Donated Successfully!')
        } else {
            toast.error("You have already donated to this project!")
        }
    };



    return (
        <div className="mt-[80px] px-[140px]">
            <div><Toaster
  position="top-center"
  reverseOrder={false}
/></div>
            <div className="hero h-[700px] rounded-lg" style={{ backgroundImage: `url(${singleCardData?.picture})` }}>
                <div className="hero-overlay h-[15%] bg-opacity-60 relative mt-[595px] rounded-bl-lg rounded-br-lg"></div>
                <div className="relative mt-[595px] pl-[37px] w-full text-neutral-content">
                    <div className="max-w-md">
                        <button onClick={handleDonate} className="text-white font-semibold text-xl px-[26px] py-[14px] bg-[#FF444A] rounded">Donate ${singleCardData?.price}</button>
                    </div>
                </div>
            </div>
            <h1 className="mt-[56px] font-bold text-[40px] mb-6">{singleCardData?.title}</h1>
            <p className="text-[#0B0B0BB2] text-xl mb-10 </Link>">{singleCardData?.description}</p>
        </div>
    );
};

export default Details;