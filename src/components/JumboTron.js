import React from 'react';
const styles = {
  display:"flex",
  background:"gray",
  textAlign:"center"
}

function JumboTron() {
 return <>
    <div style={styles} className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">A directory for employers to view all their employees and info!</p>
      </div>
    </div>
  </>
}
export default JumboTron;