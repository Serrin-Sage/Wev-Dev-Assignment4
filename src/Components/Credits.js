const Credits = (props) => {
    
    let creditsDisplay = () => {
      const {credits} = props;
      return credits.map((Credit) => {
        let date = Credit.date.slice(0,10);
        return (
        <div className="credit-container">
          <div key = {Credit.id} className="credit-item">
                      <h3>{Credit.description}</h3>
                      <p>${Credit.amount}</p>
                      <p>Date: {date} </p>
                  </div>
        </div>
        )
      });
    }
      return (
          <div className="credit-page">
             <h1 className="credit-title">Credits</h1>
             <form onSubmit={props.addCredit} className='add-value-form'>
               <input type="text" name="description" />
               <input type="number" name="amount" />
               <button type="submit">Add Credit</button>
             </form>
           <div className="content-container">
              {creditsDisplay()}
              
           </div>
           
          </div>
  
      )
  }
  export default Credits;