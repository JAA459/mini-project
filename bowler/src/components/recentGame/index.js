import React from 'react'

const recent = () => {
    var retrievedItem = JSON.parse(localStorage.getItem("Game1"));
    console.log(retrievedItem.hole1);
    const Hole1 = retrievedItem.hole1;
    const Hole2 = retrievedItem.hole2;
    const Hole3 = retrievedItem.hole3;
    const Hole4 = retrievedItem.hole4
    const Hole5 = retrievedItem.hole5;
    const Hole6 = retrievedItem.hole6;
    const Hole7 = retrievedItem.hole7;
    const Hole8 = retrievedItem.hole8;
    const Hole9 = retrievedItem.hole9;
    return (
        <div>
            <tr>
               <td>
                   hole1:<input
                   name="hole1"
                   input="text"
                   value={Hole1}
                   >
                   </input>
               </td>
               <td>
                   hole2:<input
                   name="hole2"
                   input="text"
                   value={Hole2}
                   >
                   </input>
               </td>
               <td>
                   hole3:<input
                   name="hole3"
                   input="text"
                   value={Hole3}
                   >
                   </input>
               </td>
               <td>
                   hole4:<input
                   name="hole4"
                   input="text"
                   value={Hole4}
                   >
                   </input>
               </td>
               <td>
                   hole5:<input
                   name="hole5"
                   input="text"
                   value={Hole5}
                   >
                   </input>
               </td>
               <td>
                   hole6:<input
                   name="hole6"
                   input="text"
                   value={Hole6}
                   >
                   </input>
               </td>
               <td>
                   hole7:<input
                   name="hole7"
                   input="text"
                   value={Hole7}
                   >
                   </input>
               </td>
               <td>
                   hole8:<input
                   name="hole8"
                   input="text"
                   value={Hole8}
                   >
                   </input>
               </td>
               <td>
                   hole9:<input
                   name="hole9"
                   input="text"
                   value={Hole9}
                   >
                   </input>
               </td>
               </tr>
        </div>
    )
}

export default recent
