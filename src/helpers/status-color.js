export const getStatusColor = status => {
  const pending = 'yellow'
  const fail = 'red'
  const success = 'green'
  switch (status) {
    case 'aprovado':
    case 'aprovada':
      return success
    case 'pendente':
      return pending
    case 'reprovado':
    case 'reprovada':
      return fail
  }
}
