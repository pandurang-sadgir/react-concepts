// Note : There are different types of event we can respond to those event by defing event handler to run some functionality 
// Don't call event handler inside defination of event at component where event will be call ,React call it when event occure.


export default function RespondingEvent() {
    function handleClick(){
        alert('Hi..There');
    }
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

