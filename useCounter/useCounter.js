import { useState } from "react";

export const useCounter = ( initialState = 10 ) => { 

    const [counter, setcounter] = useState(initialState);

    const increment = ( factor = 1 ) => {
        setcounter( counter + 1 );
    }

    const decrement = ( factor = 1 ) => {
        setcounter( counter - 1 );
    }

    const reset = (  ) => {
        setcounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
