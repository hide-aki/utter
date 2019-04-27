import React, {Component} from "react"
import StripeCheckout from "react-stripe-checkout"
/* import {withRouter} from "react-router-dom" */
/* import {graphql} from "react-apollo" */
/* import Grid from "@material-ui/core/Grid" */
import Typography from "@material-ui/core/Typography"
import {withStyles} from "@material-ui/core/styles"
/* import gql from "graphql-tag" */
/* import {session} from "brownies" */
/* import {toast} from "react-toastify" */

/* import {Field, withFormik} from "formik" */
/* import isEmpty from "lodash/isEmpty" */
/* import {courseCreateSchema} from "../yupSchemas.js" */
import /* FormikInput, */
/* FormikTextArea, */
/* Span, */
/* Img, */
/* LoadingButton, */
"../../components"

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  heading: {
    color: "white"
  },
  heroUnit: {
    backgroundColor: "#2bae3a"
  },
  heroContent: {
    maxWidth: 960,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 6}px ${theme
      .spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  masthead: {
    padding: theme.spacing.unit * 1,
    margin: "auto",
    maxWidth: 900,
    [`@media (max-width:770px)`]: {
      flexDirection: "column"
    }
  },
  root: {
    maxWidth: 960,
    margin: "0 auto"
  },
  subHeading: {
    color: "black",
    marginTop: "40px",
    position: "relative"
  }
})

class AccountBilling extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('key": ', process.env.STRIPE_PUBLISHABLE)
    const {classes} = this.props
    return (
      <React.Fragment>
        <Typography
          align="center"
          variant="h4"
          className={classes.heading}
          gutterBottom>
          Billing
        </Typography>
        <Typography align="left" variant="h6" gutterBottom>
          Payment
        </Typography>
        <StripeCheckout
          image="https://www.gmkfreelogos.com/logos/D/img/DKP_-_uz-Logo.gif"
          /* image="https://st2.depositphotos.com/5943796/11454/v/950/depositphotos_114540072-stock-illustration-initial-letter-uz-red-swoosh.jpg" */
          token={token => console.log("tokeN", token)}
          stripeKey={process.env.STRIPE_PUBLISHABLE}
        />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(AccountBilling)
