import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {Box} from '../../components'
import '../../layouts/Courses/styles.css'

class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      multi: true,
      multiValue: [],
      options: [],
      value: undefined
    }
  }

  clearValue = e => {
    this.select.setInputValue('')
  };

  updateValue = newValue => {
    const {multi} = this.state
    if (multi) {
      this.setState({multiValue: newValue})
    } else {
      this.setState({newValue})
    }
    this.props.addTags(newValue)
  };

  render() {
    const {multi, multiValue, options, value} = this.state
    return (
      <Box width="250px" width1080="74%">
        <Select.Creatable
          wrapperStyle={{
            margin: '20px 0 0 0',
            width: '100%'
          }}
          style={{
            width: '100%'
          }}
          menuContainerStyle={{
            width: '100%'
          }}
          menuStyle={{
            width: '100%'
          }}
          multi={multi}
          options={options}
          onChange={this.updateValue}
          value={multi ? multiValue : value}
        />
        <div className="hint">{this.props.hint}</div>
      </Box>
    )
  }
}

Tags.propTypes = {
  label: PropTypes.string,
  searchable: PropTypes.bool
}

Tags.defaultProps = {
  label: 'Tags:',
  searchable: true
}

export default Tags
