import React from 'react';

const Triel = () => {


    const  practice = event =>{
        event.preventDefault()
        console.log(event.target.email.value)
    }
    return (




        <div>
            <div className="from">
                <form onSubmit={practice}>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="" />
                <input type="submit" value="click" />
           



            </form>
            
            </div>
        </div>
    );
};

export default Triel;