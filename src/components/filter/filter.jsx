
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Forms, Label, Input } from './filterStyled';
import { changeFilter} from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Notification from 'components/Utils/Notification';
import { getFilter } from 'redux/filter/filterSelector';
import Loader from 'components/Utils/Loader'
import { getIsLoading,getError } from 'redux/contacts/selectors';



const filterInputId = nanoid(4);


export default function Filter({ value, onChange }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilter);
    const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  
      const onChangeFilter = (e) => {
        dispatch(changeFilter(e.currentTarget.value));
        
        
  }
  if (contacts.length === 0) {
   return <Notification />
  }
    

    return (
        <Forms>
            <Label htmlFor={filterInputId}>Find contact by name
                <Input 
                    type="text"
                    name="findByName"
                    id={filterInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={value}
                    onChange={onChangeFilter}
                />
        </Label>
          {isLoading && !isError && <Loader/>}
        </Forms>
    );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};