export const Input = ({ placeholder, onChange }) => {
  return (
    <>
      <label htmlFor="input"></label>
      <input placeholder={placeholder} name="input" onChange={onChange} />
    </>
  )
}
