import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Title = ({ text }) => {
  return (
    <Header
      content={text}
      size='large'
    />
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
