import { Link } from "react-router-dom";

const DonationPageCard = ({ singleDonated }) => {

    const { category, title, picture, id, card_bg, text_and_btn_bg, category_bg, price } = singleDonated;

    return (
        <div className="card rounded card-side bg-base-100 shadow" style={{backgroundColor: `${card_bg}`}}>
            <figure><img src={picture} alt={title} className="w-[260px] h-[240px]" /></figure>
            <div className={`px-6 rounded-bl-lg rounded-br-lg flex flex-col justify-center`}>
            <p className="px-[10px] py-[4px] rounded w-fit mb-2" style={{backgroundColor: `${category_bg}`, color: `${text_and_btn_bg}`}}>{category}</p>
            <h3 className="font-semibold text-2xl mb-2">{title}</h3>
            <h3 className="font-semibold text-base mb-5" style={{color: `${text_and_btn_bg}`}}>${price}</h3>
            <Link to={`/details/${id}`} className="px-[16px] py-[9px] rounded w-fit mb-2 text-white text-lg font-semibold" style={{backgroundColor: `${text_and_btn_bg}`}}>View Details</Link>
            </div>
        </div>
    );
};

export default DonationPageCard;