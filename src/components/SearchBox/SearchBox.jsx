import css from './SearchBox.module.css'

export default function SearchBox({ value, onSearch }) {
    
    return (
    <div>
      <p>Find contacts by name</p>
        <input
          className={css.field}
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
