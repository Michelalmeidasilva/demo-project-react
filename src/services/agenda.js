import client from 'providers/fetchClient'

export const getAgenda = () => client.get('/agenda')
