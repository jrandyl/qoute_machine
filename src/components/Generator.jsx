import React, { Component } from 'react'
import { QouteArr } from './IndexArr'
import { Index } from './IndexArr'

class Generator extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           qoutes: QouteArr,
           generatedQoute: Index.qoute,
           generatedAuthor: Index.author,
           generatedColor: Index.color,
           isClicked: false
        }
      }
  
      changeQoute = () => {
        let {qoute, author, color} = this.state.qoutes[Math.floor(Math.random() * this.state.qoutes.length)]
        this.setState({
          generatedColor: color,
          generatedAuthor: author,
          generatedQoute: qoute,
          isClicked: true
        });
        setTimeout(() => {
          this.setState({ isClicked: false });
        }, 1000);
      }
      
    render() {
      const { isClicked } = this.state;
  
      let app = {
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: this.state.generatedColor,
        fontFamily: 'rubik',
        transition: isClicked ? 'background-color 1s ease-out' : ''
      }
  
      let text = {
        transition: isClicked ? 'opacity 1s ease-out' : ''
      }
  
      let qouteBox = {
        width: '500px',
        border: '1px solid this.state.generatedColor',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: this.state.generatedColor,
        borderRadius: '50px'  
      }
  
      let buttonIcon = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 2rem 0'
      }
  
      let icon = {
        display: 'flex',
        gap: '0.5rem',
        fontSize: '3rem',
        marginBottom: '2rem',
        marginTop: '2rem',
        color: this.state.generatedColor
      }
  
      let fb = {
        cursor: 'pointer',
        color: this.state.generatedColor
      }
  
      let button = {
        color: 'white',
        backgroundColor: this.state.generatedColor,
        marginBottom: '2rem',
        marginTop: '2.3rem',
        border: 'none',
        padding: '1rem 1rem 1.7rem 1rem',
        height: '2rem',
        justifyContent: 'justify',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
      }
  
      
  
      return (
        <div style={app} className={this.state.generateAnimations}>
          <div id="quote-box" style={qouteBox}>
            <div id="text">
              <p className='text qoute' style={text}><i className="fa-solid fa-quote-left"></i> {this.state.generatedQoute}</p>
            </div>
  
            <div id="author">
              <p className='text author' style={text}>{this.state.generatedAuthor}</p>
            </div>
            
            
            
            <div style={buttonIcon}>
              <div style={icon}>
              <a href='https://facebook.com/' target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook button" style={fb}></i></a>
              <a id="tweet-quote" href='twitter.com/intent/tweet' target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter button" style={fb}></i></a>
              </div>
              
              <span><button id="new-quote" onClick={this.changeQoute} style={button} className='button'>CHANGE QOUTE</button></span>
            </div>
          </div>
        </div>
      )
    }
}

export default Generator