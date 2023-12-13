import { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import { BusinessDataContext } from '../../context/BusinessDataContext';
import './filter-item.css';

const FilterItem = ({ newItem }) => {

    const { removeFilter } = useContext(BusinessDataContext);

    const handleRemoveItem = () =>{
        removeFilter(newItem.tag);
    }

  return (
    <>
        <div className="one-item">
            <span className='item-text'>{newItem.text}</span>
            <HiX
                className="item-cancel-icon" 
                onClick={handleRemoveItem}
            />
        </div>
    </>
  )
}

export default FilterItem