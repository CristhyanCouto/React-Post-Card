import './styles.css';

export const TextInput = ({ searchValue, handleChange}: 
    { searchValue: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return(
        <input className='text-input'
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Type your search"
            >
        </input>
)}