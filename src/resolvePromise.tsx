function resolvePromise (promise, promiseState, notify){

    promiseState.promise = promise;
    promiseState.data = null;
    promiseState.error = null;
  
    if (notify){
      notify();
    }
  
    function saveDataACB(result){
      if (promiseState.promise === promise)
        promiseState.data= result;
      if (notify)
        notify();
    }
    function saveErrorACB(err){
      if (promiseState.promise === promise)
        promiseState.error= err;
      if (notify)
        notify();
    }
  
    promise?.then(saveDataACB).catch(saveErrorACB);
  }
  
  export default resolvePromise