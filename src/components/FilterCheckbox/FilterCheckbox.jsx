import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='checkbox-container'>
      <input
        className='checkbox'
        type='checkbox'
        value='yes'
        id='checkbox'
        name='checkbox'
      />
      <label className='checkbox-label' for='checkbox'>Короткометражки</label>
    </div>
  );
};
