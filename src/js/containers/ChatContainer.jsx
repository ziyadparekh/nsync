import React, { Component } from 'react';

const chat = {
  container: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '400px',
    minWidth: '400px',
    maxWidth: '400px',
    height: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD',
    WebkitBoxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD',
    MozBoxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD'
  },
  toggle: {
    position: 'relative',
    float: 'left',
    width: '100%',
    height: '70px',
    backgroundColor: '#ff5722'
  },
  overlay: {},
  toggleImg: {},
  body: {
    position: 'relative',
    float: 'left',
    width: '100%',
    height: 'calc(100% - 70px)'
  },
  messages: {
    position: 'relative',
    float: 'left',
    width: '100%',
    height: '100%'
  },
  list: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    listStyleType: 'none',
    marginBottom: '0px',
    bottom: '70px'
  },
  item: {
    width: '100%',
    position: 'relative',
    float: 'left',
    height: '20px'
  },
  input: {
    position: 'absolute',
    width: '100%',
    height: '50px',
    bottom: '20px',
    left: '0',
    padding: '0px 10px'
  },
  inputBox: {
    placeholder: "Type to chat",
    fontSize: '14px',
    padding: '5px 14px',
    height: '50px',
    width: '100%',
    outline: 'none',
    borderRadius: '3px',
    border: '1px solid #9e9e9e'
  }
};

class ChatContainer extends Component {
  render() {
    return (
      <div className='chat-container' style={chat.container}>
        <div className='chat-toggle' style={chat.toggle}>
          <div className='chat-overlay' style={chat.overlay}>
            <img src='' style={chat.toggleImg} />
          </div>
        </div>
        <div className='chat-body' style={chat.body}>
          <div className='chat-messages' style={chat.messages}>
            <ul className='chat-list' style={chat.list}>
              <li className='chat-item' style={chat.item}>
                BLAHSHSHSKSJDJSDLKJSKLJD
              </li>
            </ul>
            <div className='chat-input' style={chat.input}>
              <input type='text' style={chat.inputBox} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatContainer;