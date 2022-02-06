


export const PokeApi = () => {


    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then( (resp) => resp.json())
        .then((data) => {
            console.log(data);
          });

        
      
    return (
        <div>
            <h2> POKE API</h2>
        </div>
    )

}