
export default function DontPutZero() {
  return (
    <div>
      <MessageCount/>
    </div>
  )
}


 function MessageCount() {
    let messageCount = 0;


  return (
    <div>
    {messageCount >0 && <h1>This is message from user</h1>}

    </div>
  )
}
