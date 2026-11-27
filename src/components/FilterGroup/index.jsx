import './styles.css';

function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  selected,
  onChange,
  name,
}) {
  const groupName = name || title?.toLowerCase().replace(/\s+/g, '-');

  function isChecked(optionValue) {
    if (inputType === 'radio') {
      return selected === optionValue;
    }
    if (Array.isArray(selected)) {
      return selected.includes(optionValue);
    }
    return false;
  }

  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-options">
        {options.map((option, index) => {
          const optionValue = option.value ?? option.text;
          const inputId = `${groupName}-${index}`;

          return (
            <label key={`${optionValue}-${index}`} htmlFor={inputId} className="filter-option">
              <input
                id={inputId}
                type={inputType}
                name={inputType === 'radio' ? groupName : `${groupName}-${index}`}
                value={optionValue}
                checked={selected !== undefined ? isChecked(optionValue) : undefined}
                onChange={() => onChange && onChange(optionValue)}
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default FilterGroup;
