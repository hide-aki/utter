import React, {Component} from "react"
import {connect} from "react-redux"
import schema from "../../../app/schema.js"
import {
  Button,
  Container,
  Grid,
  Header,
  Loader,
  Segment
} from "semantic-ui-react"
import {Query} from "react-apollo"
import gql from "graphql-tag"
import {Masthead} from "../../../containers"

import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-material.css"

import {toggleFooter} from "../../../app/actions/toggle-footer-action.js"

const getCourse = gql`
  query getCourse($courseId: String!) {
    getCourse(courseId: $courseId) {
      courseName
      levels {
        id
        title
      }
    }
  }
`

class Levels extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columnDefs: [
        {
          rowDrag: true,
          headerName: ""
        },
        {headerName: "Level", field: "level"},
        {headerName: "Term", field: "model"},
        {headerName: "Action", field: ""}
      ],
      rowData: [
        {level: "1", model: "Celica", price: 35000},
        {level: "2", model: "Mondeo", price: 32000},
        {level: "3", model: "Boxter", price: 72000}
      ]
    }
  }

  componentDidMount() {
    this.props.toggleFooter(true)
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => this.setState({rowData}))
  }

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + " " + node.model)
      .join(", ")
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  render() {
    const {course} = this.props
    console.log("course: ", course)
    return (
      <Query
        query={getCourse}
        variables={{
          courseId: "5c2437abfe78c625504080f1"
        }}>
        {({loading, error}) => {
          if (loading) {
            return (
              <Grid.Column>
                <Loader active>Loading</Loader>
              </Grid.Column>
            )
          }
          if (error)
            return (
              <Grid.Column>
                <pre>
                  {error.graphQLErrors.map(({message}, i) => (
                    <p
                      style={{
                        fontSize: "1em",
                        color: "red",
                        margin: "30px",
                        padding: "30px",
                        textAlign: "center"
                      }}
                      key={i}>
                      {message}
                    </p>
                  ))}
                </pre>
              </Grid.Column>
            )
          return (
            <Grid columns={1} centered>
              <Grid.Column textAlign="center">
                <Masthead padding="60px 20px 0 20px">
                  <Header as="h1">Course Levels</Header>
                </Masthead>
              </Grid.Column>
              <Grid.Column>
                {/* {data.getCourse.levels.map(level => { 
              return ( */}
                <Container style={{paddingBottom: "5em"}} text>
                  <Header as="h4" attached="top" block />
                  <Segment attached>
                    <div
                      className="ag-theme-material"
                      style={{
                        position: "relative",
                        height: "500px",
                        margin: "0 auto",
                        width: "100%"
                      }}>
                      <AgGridReact
                        enableColResize
                        rowDragManaged
                        defaultColDef={{
                          headerComponentParams: {
                            menuIcon: "fa-bars"
                          }
                        }}
                        onGridReady={params => (this.gridApi = params.api)}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                      />
                      <Button
                        onClick={this.onButtonClick}
                        color="yellow"
                        floated="right"
                        fontSize="1.5rem"
                        style={{
                          bottom: "-80px",
                          right: "60px",
                          position: "absolute"
                        }}
                        type="submit">
                        Save
                      </Button>
                    </div>
                  </Segment>
                  <Header as="h4" attached="bottom" block />
                </Container>
              </Grid.Column>
            </Grid>
          )
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => {
  const session = schema.session(state.apiReducer)
  const {User, Course} = session
  const userObj = User.all().toRefArray()
  const courseObj = Course.all().toRefArray()
  var user = userObj[0]
  var course = courseObj[0]

  return {
    user,
    course
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFooter: () => dispatch(toggleFooter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Levels)