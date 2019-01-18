import React, {Component} from "react"
import {connect} from "react-redux"
import Helmet from "react-helmet"
import schema from "../../../app/schema.js"
/* import ModalMgr from "../../../containers/modals/modal-mgr.js" */
/* import {history} from "@utterzone/connector" */
import {Container, Form, Header, Item, Segment} from "semantic-ui-react"
import {Masthead} from "../../../containers"
/* import {getEntitiesSession} from "../../../api/entities/selectors.js" */
import ControlEdit from "../components/course-edit-controls.js"

// actions
import {toggleFooter} from "../../../app/actions/toggle-footer-action.js"
/* import {openModal} from "../../../containers/modals/actions.js" */

class CourseIntroduction extends Component {
  state = {name: "", email: "", submittedName: "", submittedEmail: ""}

  componentDidMount() {
    this.props.toggleFooter(false)
    // TODO if no courseId redirect back to courses-created
    // TODO put courseId into redux :
    /* console.log("props: ", this.props) */
    /* if (!this.props.location.state || !this.props.location.state.courseId) { */
    /*   history.push("/courses/created") */
    /* } else { */
    /*   console.log("we need this in redux") */
    /* } */
  }

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  handleSubmit = () => {
    const {name, email} = this.state

    this.setState({submittedName: name, submittedEmail: email})
  }

  openModalClicked = e => {
    e.preventDefault()
    /*   this.props.openModal("courseModal", null) */
  }

  render() {
    const {courseName, courseDescription} = this.props.course
    const items = [
      {
        childKey: 0,
        header: courseName,
        description: courseDescription,
        meta: "",
        extra: ""
      }
    ]
    return (
      <Container>
        <Container>
          <Masthead padding="60px 20px 40px  20px">
            <Header as="h1">Course Introduction</Header>
          </Masthead>
          <Helmet>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="Affordable language learning" />
            <meta name="author" content="Isaac Pak" />
            <title>Utterzone | Settings</title>
            <link rel="canonical" href="https://utter.zone/settings" />
          </Helmet>
        </Container>
        <Form onSubmit={this.handleSubmit} style={{position: "relative"}}>
          {/*  <ModalMgr /> */}
          <Container style={{paddingBottom: "5em"}} text>
            <Header as="h2">General Introduction</Header>

            <Header as="h4" attached="top" block>
              Course Information
            </Header>
            <Segment attached>
              <Item.Group items={items} />
            </Segment>
            <ControlEdit />
            <Header as="h4" attached="bottom" block />
          </Container>
          <Container style={{paddingBottom: "5em"}} text>
            <Header as="h2">Objectives</Header>

            <Header as="h4" attached="top" block />
            <Segment attached>Change Image</Segment>
            <ControlEdit />
            <Header as="h4" attached="bottom" block />
          </Container>
          <Container style={{paddingBottom: "5em"}} text>
            <Header as="h2">Tips</Header>
            <Header as="h4" attached="top" block />
            <Segment attached>This is permanent</Segment>
            <ControlEdit />
            <Header as="h4" attached="bottom" block />
          </Container>
          <Container style={{position: "relative", paddingBottom: "5em"}} text>
            <Form.Button
              floated="right"
              onClick={this.onButtonClick}
              content="Save Changes"
              color="yellow"
              fontSize="1.5rem"
              style={{position: "absolute", right: "0"}}
            />
          </Container>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const session = schema.session(state.apiReducer)
  const {Course} = session
  const courses = Course.all().toRefArray()
  return {
    course: courses[0],
    courseReducer: state.apiReducer.Course
  }
}

const actions = {
  toggleFooter
}

export default connect(
  mapStateToProps,
  actions
)(CourseIntroduction)
