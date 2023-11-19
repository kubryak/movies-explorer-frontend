import './FilterCheckbox.css';

export default function FilterCheckbox({ value, onChange }) {
  return (
    <div className='checkbox-container'>
      <input
        className='checkbox'
        type='checkbox'
        value={value}
        checked={value}
        id='checkbox'
        name='checkbox'
        onChange={onChange}
      />
      <label className='checkbox-label' htmlFor='checkbox'>Короткометражки</label>
    </div>
  );
};
