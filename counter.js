module.exports = {
    getCounter
  };

function getCounter (initialValue, incrementValue) {
    function increment() {
       var result = (initialValue + incrementValue);
       initialValue = result;
       console.log("INC =", initialValue)
       return initialValue      
    }
    function decrement() {
       var result = (initialValue > 1) ? (initialValue - incrementValue) : 0;
       numberResult = (initialValue - incrementValue);
        initialValue = numberResult;
        console.log("DEC =", initialValue)
        return initialValue
    }
    return {
         increment: increment,
         decrement: decrement
    }
}