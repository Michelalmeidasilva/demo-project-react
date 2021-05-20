import React, { forwardRef } from 'react'

import { Row } from 'components'

const Column = forwardRef((props, ref) => <Row ref={ref} flexDirection='column' {...props} />)

export default Column
