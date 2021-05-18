import { Column, Text } from 'components'

const Select = ({ name, options, label, ref, register, ...props }) => {
  return (
    <Column>
      {label && <Text mb={1}>{label}</Text>}
      <Column {...props}>
        <select style={{ height: '30px' }}>
          {options.map(option => (
            <option key={option.value} ref={ref} value={option.value} {...register(name, { required: true })}>
              {option.label}
            </option>
          ))}
        </select>
      </Column>
    </Column>
  )
}

export default Select
