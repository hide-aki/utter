import React, {useState, PureComponent} from "react"
import {session} from "brownies"

import CardHeader from "@material-ui/core/CardHeader"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
/* import FavoriteIcon from "@material-ui/icons/Favorite" */
/* import ShareIcon from "@material-ui/icons/Share" */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
/* import ExpansionPanel from "@material-ui/core/ExpansionPanel" */
/* import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions" */
/* import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails" */
import Grid from "@material-ui/core/Grid"
/* import IconButton from "@material-ui/core/IconButton" */
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import {withStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

import classNames from "classnames"
import {styles} from "./styles.js"
import "./overrides.css"

// images
import busyPeopleImg from "../../assets/images/busy-people.jpg"

const RandomCard = ({
  audioUrl,
  classes,
  partsOfSpeech,
  translation,
  word,
  phrase,
  question
}) => {
  const [state, changeState] = useState({
    state: {
      translation,
      expanded: false
    }
  })
  const handleExpandClick = () => {
    changeState({
      ...state,
      expanded: !state.expanded
    })
  }

  const toggleTranslate = () => {
    const a = new Audio(audioUrl)
    a.play()
    if (state.translation === "translation") {
      changeState({
        ...state,
        translation
      })
    } else {
      changeState({
        ...state,
        translation
      })
    }
  }

  if (
    partsOfSpeech === "alphabet" ||
    partsOfSpeech === "vowel" ||
    partsOfSpeech === "consonant"
  ) {
    var media = <h1>{word}</h1>
  } else {
    media = (
      <CardMedia
        className={classes.media}
        image={`${busyPeopleImg}`}
        title="Paella dish"
      />
    )
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {session.level}
          </Avatar>
        }
        action={
          <IconButton onClick={() => alert("You don't belong here!")}>
            <MoreVertIcon />
          </IconButton>
        }
        title={word || phrase || question}
        subheader={partsOfSpeech}
      />
      {media}
      <CardContent>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            justifycontent: "center"
          }}>
          <Button onClick={toggleTranslate}>
            {state.translation ? state.translation : <PlayCircleOutlineIcon />}
          </Button>
        </div>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        {/*  <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
		 <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={classNames(classes.expand, {
            [classes.expandOpen]: state.expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={state.expanded}
          aria-label="Show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Level Notes:</Typography>
          <Typography paragraph>
            Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Ut
            varius tincidunt libero. Phasellus blandit leo ut odio. Nullam quis
            ante. Vivamus elementum semper nisi.
          </Typography>
          <Typography paragraph>
            Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Ut
            varius tincidunt libero. Phasellus blandit leo ut odio. Nullam quis
            ante. Vivamus elementum semper nisi.
          </Typography>
          <Typography paragraph>
            Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Ut
            varius tincidunt libero. Phasellus blandit leo ut odio. Nullam quis
            ante. Vivamus elementum semper nisi.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

class HostControls extends PureComponent {
  render() {
    console.log("props: ", this.props)
    return (
      <div>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showArrows
          showStatus>
          {session.vocabulary &&
            session.vocabulary.map(item => {
              return (
                <div key={item._id}>
                  <RandomCard {...item} {...this.props} />
                </div>
              )
            })}
        </Carousel>
      </div>
    )
  }
}

class CarouselContainer extends PureComponent {
  componentDidMount() {
    // get app info and load app here
  }

  render() {
    const {classes} = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} align="right">
          <Typography className={classes.appTitle} gutterBottom component="p">
            CAROUSEL
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <HostControls {...this.props} {...this.state} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CarouselContainer)