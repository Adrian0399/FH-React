
//export default = [] Exportacion por defecto NO RECOMENDADO
// const heroes = [
export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC', 'Marvel'];

//export default heroes //Para exportar cosolo con "const heroes = []"

export default heroes;

//export{
//   heroes as default,
//    owners
//}