export const Input = ({ placeholder, onChange, name }) => {
  return (
    <>
      <label htmlFor={name}></label>
      <input placeholder={placeholder} name={name} onChange={onChange} />
    </>
  )
}
