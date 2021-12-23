import React, {useEffect} from "react";

export function Child({number = 1}) {

  useEffect(() => console.log(number))
  
  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}