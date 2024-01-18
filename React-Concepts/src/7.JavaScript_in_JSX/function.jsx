// Defining function 



export default function FunctionComponent() {
    function names(){
        return "Pandurang sadgir";
    }
    const a = {
        name:'ram'
    }
  return (
    <div>
      {names()}
      <br />
      {a.name}
      {/* Note:We always need to call function but not event handler */}
    </div>
  )
}
