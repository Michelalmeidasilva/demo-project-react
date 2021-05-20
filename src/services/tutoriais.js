import client from 'providers/fetchClient'

/**
 * inclui dentro de client o metodo get no path comunicados
 */

export const getTutoriais = () => client.get('/tutoriais/')
export const getTutorial = id => client.get(`/tutoriais/${id}`)
