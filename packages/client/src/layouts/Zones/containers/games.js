import React, {Component} from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import {Box} from "../../../components"
import "../styles.css"

class Games extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      searchable: props.searchable,
      selectValue: "recall",
      clearable: false,
      rtl: false
    }
  }

  clearValue = () => {
    this.select.setInputValue("")
  }

  updateValue = newValue => {
    this.setState({
      selectValue: newValue
    })
    this.props.addGame(newValue)
    this.props.form.setFieldValue(this.props.field.name, newValue)
  }

  render() {
    const {field, options} = this.props
    return (
      <Box width="250px">
        <Select
          id="game-select"
          ref={ref => {
            this.select = ref
          }}
          onBlurResetsInput={false}
          onSelectResetsInput={false}
          required
          simpleValue
          clearable={this.state.clearable}
          wrapperStyle={{
            margin: "20px 0 0 0",
            width: "100%"
          }}
          style={{
            width: "100%"
          }}
          menuContainerStyle={{
            width: "100%"
          }}
          menuStyle={{
            width: "100%"
          }}
          name={field.name}
          options={options}
          disabled={this.state.disabled}
          value={this.state.selectValue}
          onChange={this.updateValue}
          rtl={this.state.rtl}
          searchable={this.state.searchable}
        />
      </Box>
    )
  }
}

Games.propTypes = {
  searchable: PropTypes.bool
}

Games.defaultProps = {
  searchable: false
}

export default Games