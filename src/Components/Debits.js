const Debits = (props) => {
    
    let debitsDisplay = () => {
      const {debits} = props;
      return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return (
        <div className="debit-container">
          <div key = {debit.id} className="debit-item">
                      <h3>{debit.description}</h3>
                      <p>${debit.amount}</p>
                      <p>Date: {date} </p>
                  </div>
        </div>
        )
      });
    }
      return (
          <div className="debit-page">
             <h1 className="debit-title">Debits</h1>
           <form onSubmit={props.addDebit} className='add-value-form'>
               <input type="text" name="description" placeholder="item" className="input-container"/>
               <input type="number" name="amount" placeholder="amount" className="input-container"/>
               <button type="submit" className="submit-btn">Add Debit</button>
             </form>
           <div className="content-container">
              {debitsDisplay()}   
           </div>
           
          </div>
  
      )
  }
  export default Debits;