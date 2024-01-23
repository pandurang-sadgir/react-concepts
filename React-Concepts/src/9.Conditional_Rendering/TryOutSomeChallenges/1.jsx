/* eslint-disable react/prop-types */
// Challenge 1 of 3:
// Show an icon for incomplete items with ? :
// Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true. 


export default function AllItems() {
  return (
    <div>
      <Item name={'mango'} ispurchased={true}/>
      <Item name={'Apple'} ispurchased={false}/>
      <Item name={'Cherry'} ispurchased={false}/>
      <Item name={'Chichoo'} ispurchased={true}/>
    </div>
  )
}


 function Item({name,ispurchased}) {
  return (
    <div>
    {ispurchased?(<h1>{name} &#10003;</h1>):<h1>{name} &#735;</h1>}
    </div>
  )
}

