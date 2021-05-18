import { useForm } from 'react-hook-form'

import { Card, Input, Button, Select, TextArea } from 'components'

const RecrutamentoFormHooks = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => console.log(data)
  const faccoes = [
    {
      value: 'horda',
      label: 'Horda'
    },
    {
      value: 'alliance',
      label: 'Alliance'
    }
  ]

  return (
    <Card
      as='form'
      onSubmit={handleSubmit(onSubmit)}
      width={432}
      padding={50}
      borderRadius={4}
      boxShadow='0px 2px 4px #21212133'
    >
      <Input name='email' label='Email' type='email' placeholder='digite' register={register} />
      <Input name='nickname' label='Nickname' type='text' placeholder='digite ' register={register} />
      <Select name='faccao' label='facção' options={faccoes} height='60px' register={register} />
      <TextArea name='motivo' label='Por que você quer entrar na guild?' register={register} />

      <Button color='black' type='submit' width='100px' height='30px'>
        Submeter
      </Button>
    </Card>
  )
}

export default RecrutamentoFormHooks
