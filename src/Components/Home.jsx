import { useEffect, useState } from 'react';
import SearchSection from './SearchSection';
import Cards from './Cards';

const Home = () => {

    const [cardData, setCardData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(getData => setCardData(getData))
    }, []);

    const handleSearch = e => {
        e.preventDefault();
        setSearchValue(e.target.searchbar.value);
    }


    return (
        <div>
            <SearchSection handleSearch={handleSearch}></SearchSection>
            <Cards cardData={cardData} searchValue={searchValue}></Cards>
        </div>
    );
};

export default Home;