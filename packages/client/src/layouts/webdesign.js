import React, {PureComponent} from "react"

class Webdesign extends PureComponent {
  render() {
    return (
      <div style={{marginTop: "100px", textAlign: "center"}}>
        <h6 style={{margin: 0, padding: 0}}>One-time payments</h6>
        <p>payment processing is secured through paypal</p>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="GD9W5K64N3AUE" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    )
  }
}

export default Webdesign
