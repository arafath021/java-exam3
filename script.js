function calculator(ana,vori)
{
    let output=0;
    output=ana*vori;
    return output;
}
console.log(calculator(16,.0625));

let singara=2*7;
let samucha=7*10;
let jilapi=9*15;
console.log(singara+samucha+jilapi);

const cities=[
    {name:"City A",population:1200000,coordinates:{ lat:34.0522,lon: -118.2437}},
    
        {name:"City B",population:800000,coordinates:{ lat:40.7128,lon: -74.0060}},
        {name:"City c",population:500000,coordinates:{ lat:41.8781,lon: -87.6298}},
];
const population=[1200000,800000,500000];
let sum=0
population.map(e=> sum +=e)
console.log(sum);



