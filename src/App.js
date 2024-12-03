import React,{useState} from 'react';
import solid from './solid.jpg';
import pattern from './pattern.jpg';
function App()
{
  const[c1,setc1]=useState(0);
  const[c2,setc2]=useState(0);
  function chgc1()
  {
    setc1(function(e)
  {
    return e+1;
  });
  }
  function chgc2()
  {
    setc2(function(e)
  {
    return e+1;
  });
  }
  return(
    <div style={{ backgroundColor: "lavender", height: "100vh", padding: "20px" }}>
      <center>
        <h1>What is Trending?</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Style</th>
            <th>vote</th>
            <th>count</th>
          </tr>
          <tr>
            <td>Solid</td>
            <td><img src={solid}/></td>
            <td><button type="vote" onClick={chgc1}>vote</button></td>
            <td>{c1}
            </td>
          </tr>
          <tr>
            <td>Pattern</td>
            <td><img src={pattern}/></td>
            <td><button type="vote" onClick={chgc2}>vote</button></td>
            <td>{c2}
            </td>
          </tr>
        </table>
      </center>
    </div>
  )
}
export default App;

