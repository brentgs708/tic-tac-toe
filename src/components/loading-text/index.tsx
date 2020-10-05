import React, { FC } from 'react'

import { H1 } from './styles'

interface IProps {
    text? : string
}

const LoadingText: FC<IProps> = ({ text }) => <H1>{ text }</H1>

LoadingText.defaultProps = {
    text: 'Loading...',
}

export default LoadingText

