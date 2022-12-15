import '../css/promiseNoData.css'

function promiseNoData(promiseState){
    if (!promiseState.promise)
      return (<div>No data</div>)
    if (!promiseState.data){
      if (!promiseState.error)
        return (<img src="https://media4.giphy.com/media/PkoBC2GlkLJ5yFIWtf/giphy.gif?cid=ecf05e47rdbk6x5330anmqd7m6homcrb47zuc4lejqomui9l&rid=giphy.gif&ct=g"/>)
      return (<div>{promiseState.error.toString()}</div>)
    }
  }
  
  export default promiseNoData