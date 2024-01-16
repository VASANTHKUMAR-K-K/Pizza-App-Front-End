import React from 'react';
import Pizza from '../Components/Pizza';
import pizzas from '../pizzaData';
export default function Homescreen() {
  return (
    <div>
       <div className='row'>
        {pizzas.map(pizza=>{
            return <div className="col-md-4 p-6">
                <div>
                    <Pizza pizza={pizza}/>
                </div>
            </div>
        })}
       </div>

    </div>

  )
}
