import React from "react"
import {session} from "brownies"
import {Flex} from "../../../components"

import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography"

export const LevelSelect = props => {
  const {levelsIdsArr} = session
  const handleChange = e => {
    console.log("e: ", e.target.value)
    const index = session.levelsIdsArr.findIndex(
      number => number === e.target.value
    )
    session.level = index + 1
    props.causeRender(session.levelsIdsArr[index])
  }
  return (
    <Flex flexdirection="row">
      <Typography style={{paddingRight: "10px"}} variant="h6" align="center">
        Choose a Level:
      </Typography>
      <Select
        renderValue={() => session.level}
        value={session.level}
        onChange={handleChange}
        inputProps={{
          id: "level",
          name: "level"
        }}>
        {levelsIdsArr.map(level => (
          <MenuItem key={level} value={level}>
            {levelsIdsArr.indexOf(level) + 1}
          </MenuItem>
        ))}
      </Select>
    </Flex>
  )
}
