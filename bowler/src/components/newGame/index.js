import { Container } from '@material-ui/core'
import React, {useEffect, useState} from 'react';


const NewGame = () => {
    const [score, setScore] = useState([])
    function saveLocally(event) {
        localStorage.setItem(event.target.name, event.target.value)
    }
    useEffect(() => {
    }, [])
    const hole1 = localStorage.getItem("hole1");
    const hole2 = localStorage.getItem("hole2");
    const hole3 = localStorage.getItem("hole3");
    const hole4 = localStorage.getItem("hole4");
    const hole5 = localStorage.getItem("hole5");
    const hole6 = localStorage.getItem("hole6");
    const hole7 = localStorage.getItem("hole7");
    const hole8 = localStorage.getItem("hole8");
    const hole9 = localStorage.getItem("hole9");
    return (
       <div>
           <tr>
               <td>
                   hole1:<input
                   name="hole1"
                   input="text"
                   Value={hole1}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole2:<input
                   name="hole2"
                   input="text"
                   Value={hole2}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole3:<input
                   name="hole3"
                   input="text"
                   Value={hole3}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole4:<input
                   name="hole4"
                   input="text"
                   Value={hole4}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole5:<input
                   name="hole5"
                   input="text"
                   Value={hole5}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole6:<input
                   name="hole6"
                   input="text"
                   Value={hole6}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole7:<input
                   name="hole7"
                   input="text"
                   Value={hole7}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole8:<input
                   name="hole8"
                   input="text"
                   Value={hole8}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
               <td>
                   hole9:<input
                   name="hole9"
                   input="text"
                   Value={hole9}
                   onBlur={saveLocally}
                   >
                   </input>
               </td>
           </tr>
       </div>
    )
}

export default NewGame
