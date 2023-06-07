function Dropdown({ options }) {
  return (
    <div>
      {options.map((option) => option.label)}
    </div>
  )
}

export default Dropdown;