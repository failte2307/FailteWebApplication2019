import React, {Component} from 'react'


const divStyle = {
  paddingTop: '5em'
} 

class BannerComponent extends Component {
  render() {
    return (
      <>
        <div className='container' style={divStyle}>
          <img id="logo" src="/logo.png" alt='Company Logo'/>
        </div>
      </>
    )
  }
}
export default BannerComponent
