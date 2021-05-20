import client from 'providers/fetchClient'

/**
 * inclui dentro de client o metodo get no path comunicados
 */

export const getComunicados = () => client.get('/comunicados/')
export const getComunicado = id => client.get(`/comunicados/${id}`)
