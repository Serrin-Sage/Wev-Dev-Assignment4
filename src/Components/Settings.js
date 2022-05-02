import React, {Component} from 'react';


class Settings extends Component {
  constructor () {
    super();
    this.state = {
      user: {
        userName: '',
        showSettings: false,
      },
      navigate: false
    }
  }

  edit = () => {
    this.setState({showSettings: true})
  }

  cancel = () => {
    this.setState({showSettings: false})
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    this.setState({user: updatedUser})
  }
  
  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.props.changeUsername(this.state.user)
    document.body.style.backgroundColor = document.getElementById('bg-color').value;
    document.body.style.color = document.getElementById('text-color').value;
    this.cancel()
  }
  
  render () {
    if (this.state.showSettings) {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='user-name-form'>
            <div className='input-field'>
              <label>Change Username: </label>
              <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
            </div>
            <div  className='input-field'>
              <label>Change background color:</label>
              <input type="text" id='bg-color' />
            </div>
            <div  className='input-field'>
              <label>Change text color:</label>
              <input type="text" id='text-color' />
            </div>
            <button className='update-button'>UPDATE</button>
          </div>  
        </form>
      </div>
    );
    } else {
      return (
        <div className="settings-container">
            <button className="edit-button" onClick={this.edit}>Customize Profile</button>
        </div>
      );
    }
  }
}
export default Settings;