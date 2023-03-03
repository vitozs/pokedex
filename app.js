$(document).ready(()=>{

    let pokemon = null
    $('#enviar').on('click', (e)=>{
        pokemon = $('#form-pesquisa').val().toLowerCase()
        e.preventDefault()
        $('#form-pesquisa').val("")
        
        pesquisar(pokemon)
        if($('.pokebox')){
            $('.pokebox').remove()
        }
    })

    function pesquisar(pokemon){
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            dataType: 'json',
            success: (pokemonJson)=>{
                console.log(pokemonJson)
                $('.box').append(`

                    <div class="pokebox d-flex justify-content-center align-items-center flex-column">
                        <h3>${pokemonJson.name.charAt(0).toUpperCase() + pokemonJson.name.slice(1) }</h3>
                        <img src="${pokemonJson.sprites.front_default}">
                    </div>
                
                `)
    
    
            },
            error: (e)=>{
                console.log(e)
            }
        })
    }
    

})