import * as React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import Debits from "./Components/Debits";
import Credits from "./Components/Credits";
import Home from "./Components/Home"
import Settings from "./Components/Settings";
import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: 'Guest',
      },
      accountBalance: 0,
      debits: [],
      credits: []
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    //get data from API response
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    accountBalance = Math.round(accountBalance *100) /100
    this.setState({debits, credits, accountBalance});
    
  } 


  addDebit = (e) => {
    //send to debits view via props
    //updates state based off user input
    e.preventDefault()
    let { debits } = this.state
    let balance = this.state.accountBalance;

    const description  = e.target[0].value
    const amount  = Number(e.target[1].value)
    const today = new Date();

    //formatting to match other dates
    const month = today.getMonth() + 1;
    const date = today.getFullYear().toString() + "-" + month.toString() + "-" + today.getDate().toString();
    
    const newDebit = {description, amount, date}
    balance = balance - amount;
    debits = [...debits, newDebit]
    this.setState({debits: debits, accountBalance: balance})
  }

  addCredit = (e) => {
    //send to Credits view via props
    //updates state based off user input
    e.preventDefault()
    let { credits } = this.state
    let balance = this.state.accountBalance;

    const description  = e.target[0].value
    const amount  = Number(e.target[1].value)
    const today = new Date();

    //formatting to match other dates
    const month = today.getMonth() + 1;
    const date = today.getFullYear().toString() + "-" + month.toString() + "-" + today.getDate().toString();
    
    const newDebit = {description, amount, date}
    balance = balance - amount;
    credits = [...credits, newDebit]
    
    this.setState({credits: credits, accountBalance: balance})
  }

  changeUsername = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    return (
      <div className="App">
        <Router >
        <Home userName={this.state.currentUser.userName} accountBalance={this.state.accountBalance}/>
        <Routes>
          <Route path='/settings' element={<Settings user={this.currentUser} changeUsername={this.changeUsername} />} />
          <Route path="/debitpage" element={<Debits addDebit={this.addDebit} debits={this.state.debits} />} />
          <Route path="/creditpage" element={<Credits addCredit={this.addCredit} credits={this.state.credits} />} />
        </Routes>
        </Router>
      </div>
    );
  }


}




export default App;
