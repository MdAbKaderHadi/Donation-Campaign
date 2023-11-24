import Card from './Card';

const Cards = ({ cardData, searchValue }) => {
    const filteredData = cardData.filter(singleCardData => singleCardData.category.toLowerCase().includes( searchValue.toLowerCase()) || singleCardData.title.toLowerCase().includes( searchValue.toLowerCase()));


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[140px] pt-[50px] -mt-32 mb-20'>
            {searchValue === ""
                ? cardData.map((singleData, id) => <Card key={id} singleData={singleData}></Card>)
                : filteredData.map((singleData, id) => <Card key={id} singleData={singleData}></Card>)
            }
        </div>
    );
};

export default Cards;
