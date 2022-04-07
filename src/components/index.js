import logo from './../assets/logo.png';
import videoimg from './../assets/video.jpg';
import smartchain from './../assets/smartchain.png';
import usdt from './../assets/usdt.png';
import bnb from './../assets/bnb.png';

const Application = () => {

    return (
         <>
          <nav className="navbar navbar-expand-sm" style={{background:"black"}}>
  <div className="container-fluid">
    <img src={logo} alt="logo" className='img-fluid' width={200}/>
   x
    
      <ul className="navbar-nav">
        <li className="nav-item" style={{padding:"5px"}}>
          <button className='btn btn-dark btn-lg' style={{borderRadius:"20px",fontWeight:"bold"}}><img src={smartchain} alt="smartchain" width={30} />Smart Chain</button>
        </li>
        <li className="nav-item"  style={{padding:"5px"}}>
           <button className='btn btn-dark btn-lg' style={{borderRadius:"20px",fontWeight:"bold"}}><img src={usdt} alt="smartchain" width={30} /> 0.00 USDT | <img src={bnb} alt="smartchain" width={30} /> 0.000 BNB | <span className='fa fa-credit-card'></span> 0xBd..06</button>
        </li>
         
      </ul>
   
  </div>
</nav>
<div className='container'>
<div className='row'>
     <div className='col-sm-6'>
         <br />
       <h1>
       Registration <br />
in  Forsage USDT
       </h1>

       <br />

       <form>
           <h5 style={{color:"#3c4e66"}}>Your upline</h5>
            <input type="number" placeholder="100" className='form-control' style={{width:"50%"}} />

            <br />

            <h4 style={{color:"lime"}}><span className="fa fa-check-circle"></span> Wallet Connnected</h4>
            <h4 style={{color:"lime"}}><span className="fa fa-check-circle"></span> Network: Smart Chain</h4>
            <h4 style={{color:"lime"}}><span className="fa fa-check-circle"></span> Registration: Available</h4>
            <h4 style={{color:"red"}}><span className="fa fa-close"></span> Balance: min 10 USDT | 0.005 BNB</h4>
            <h4 style={{color:"#3c4e66"}}><span className="fa fa-circle-o"></span> Approve USDT</h4>
            <br />

            <button className='btn btn-dark btn-lg' style={{background:"#1569f5"}}>Check again</button>
       </form>
     </div>

     <div className='col-sm-6' style={{textAlign:"center"}}>
         <br />
         <div className='card' style={{background:"black"}}>
             <div className='container'>
                 <br />
         <h3><span className="fa fa-info-circle"></span> Information</h3>
         <p>
         Insufficient balance for registration.
Registration requires 10 BUSD and at least 0.005 BNB.  Your wallet balance: 0.00 BUSD and 0.000 BNB.
         </p>
         <button className='btn btn-danger'>Read guide</button> <br />
         <img src={videoimg} alt="video" className='img-fluid' width={300}/>
         <h4>Need help with Registration</h4>
         <h5>Click Support</h5>
         </div>
         </div>
     </div>
</div>

<br />
</div>
           </>
    )
}

export default Application;