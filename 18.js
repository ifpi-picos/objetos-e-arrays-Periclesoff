const carros =[
    {Carro:'Toyota Corolla', Ano:2020},
    {Carro:'Honda Civic',  Ano:2019},
    {Carro:'Ford Mustang', Ano:1964},
    {Carro:'Porsche 911', Ano:1964}
]

const fabri=carros.filter(function(carros){
    return carros.Ano > 2010
})

console.log(fabri)