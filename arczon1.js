// add.post('/add',(req,res)=>{
//     const {name} = req.body;
//     if(!name){
//         res.status(400).json({msg:"name required"});
//     }
//     res.status(200).json({msg:"user added"});
// });



import React,{ useState} from 'react';

export default function counter(){
    const [count,setcount] = useState (0);

    const increase = () =>{
     count = count +1;
     setcount(count);
    }
    return(
        <div>
            <h3>count:{count}</h3>
            <button onclick =  {()=> (increase,1)}  >+</button>
        </div>
    );
}