import { Link } from "react-router-dom";

const Card = ({ singleData }) => {
    const { category, title, picture, id, card_bg, text_and_btn_bg, category_bg } = singleData;

    return (
        <div className="max-w-[312px]">
            <Link to={`/details/${id}`}>
            <div
                    className="w-[312px] h-[194px] rounded-tl-lg rounded-tr-lg bg-cover"
                    style={{ backgroundImage: `url(${picture})` }}
                    alt={title}
                ></div>
                <div className={`p-4 rounded-bl-lg rounded-br-lg flex flex-col justify-center`} style={{backgroundColor: `${card_bg}`}}>
                    <p className="px-[10px] py-[4px] rounded w-fit mb-2" style={{backgroundColor: `${category_bg}`, color: `${text_and_btn_bg}`}}>{category}</p>
                    <h3 className="font-semibold text-xl" style={{color: `${text_and_btn_bg}`}}>{title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Card;
