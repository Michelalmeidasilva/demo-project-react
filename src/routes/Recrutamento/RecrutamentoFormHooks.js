import { useForm } from 'react-hook-form'

import { Card, Input, Button } from 'components'

const RecrutamentoFormHooks = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type='email' placeholder='digite' name='email' {...register('test', { required: true })} />
      <Input type='text' placeholder='digite ' name='nickname' {...register('nickname', { required: true })} />
      <Input type='text' placeholder='escolha' name='faccao' {...register('faccao', { required: true })} />
      <Input type='submit' />
    </form>
  )
}

export default RecrutamentoFormHooks
