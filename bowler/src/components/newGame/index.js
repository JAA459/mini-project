// 1. Save items to the react state.
// 2.End round button redirecting to home page.
// 3. Recent rounds button pulling info from the most recent roud.
// 4. Account page to update user info across all pages.
// 5. Button to clear match history.
// 6. Be able to store several matches in match history.
// 7. Style pages using MaterialUI.
import { Container } from '@material-ui/core'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const NewGame = () => {
    useEffect(() => {
        if (!(localStorage.getItem("Game1"))) {
            localStorage.setItem("Game1", JSON.stringify(score))
            var retrievedItem = JSON.parse(localStorage.getItem("Game1"));
            const Hole1 = retrievedItem.hole1;
            const Hole2 = retrievedItem.hole2;
            const Hole3 = retrievedItem.hole3;
            const Hole4 = retrievedItem.hole4
            const Hole5 = retrievedItem.hole5;
            const Hole6 = retrievedItem.hole6;
            const Hole7 = retrievedItem.hole7;
            const Hole8 = retrievedItem.hole8;
            const Hole9 = retrievedItem.hole9;
        }else {
            localStorage.setItem("Game1", JSON.stringify(score))
            var retrievedItem = JSON.parse(localStorage.getItem("Game2"));
            const Hole1 = retrievedItem.hole1;
            const Hole2 = retrievedItem.hole2;
            const Hole3 = retrievedItem.hole3;
            const Hole4 = retrievedItem.hole4
            const Hole5 = retrievedItem.hole5;
            const Hole6 = retrievedItem.hole6;
            const Hole7 = retrievedItem.hole7;
            const Hole8 = retrievedItem.hole8;
            const Hole9 = retrievedItem.hole9;
        }
    }, [])
    const [score, setScore] = useState({
        hole1:0 || Hole1,
        hole2:0 || Hole2,
        hole3:0 || Hole3,
        hole4:0 || Hole4,
        hole5:0 || Hole5,
        hole6:0 || Hole6,
        hole7:0 || Hole7,
        hole8:0 || Hole8,
        hole9:0 || Hole9
     })
     function storage() {
        localStorage.setItem("Game2", JSON.stringify(score))
    }
    function saveLocally(event) {
        setScore({...score, [event.target.name]:event.target.value});
    }
    return (
       <div>
           <tr>
               <td>
                   hole1:<input
                   name="hole1"
                   input="text"
                   Value={score.hole1}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole2:<input
                   name="hole2"
                   input="text"
                   Value={score.hole2}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole3:<input
                   name="hole3"
                   input="text"
                   Value={score.hole3}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole4:<input
                   name="hole4"
                   input="text"
                   Value={score.hole4}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole5:<input
                   name="hole5"
                   input="text"
                   Value={score.hole5}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole6:<input
                   name="hole6"
                   input="text"
                   Value={score.hole6}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole7:<input
                   name="hole7"
                   input="text"
                   Value={score.hole7}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole8:<input
                   name="hole8"
                   input="text"
                   Value={score.hole8}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
               <td>
                   hole9:<input
                   name="hole9"
                   input="text"
                   Value={score.hole9}
                   onChange={saveLocally}
                   onBlur={storage}
                   >
                   </input>
               </td>
           </tr>
           <div>
               <Link to="/home">
                    <button>End Round</button>               
               </Link>
           </div>
       </div>
    )
}

export default NewGame
