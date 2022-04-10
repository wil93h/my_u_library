import { adapterUser } from '../adapters/createAdapterAutoComplete'

export const admins = [
    { id:3 ,firstName: 'Rene',lastName: 'Barrientos', email:'rene@gmail.com',role:'admin',color:'#e45446'},
    { id:4 ,firstName: 'Harrison',lastName: 'Barrientos', email:'harrison@gmail.com',role:'admin',color:'#21bc6f'},
    { id:5 ,firstName: 'Rodrigo',lastName: 'Lopez', email:'rodrigo@gmail.com',role:'admin',color:'#432e41'},
    { id:6 ,firstName: 'Kevin',lastName: 'Aguirre', email:'kevin@gmail.com',role:'admin',color:'#efd423'},
    { id:7 ,firstName: 'Raul',lastName: 'Ardon', email:'raul@gmail.com',role:'admin',color:'#406d96'},
    { id:8 ,firstName: 'Lorena',lastName: 'Peñate', email:'lorena@gmail.com',role:'admin',color:'#e45446'},

]
export const users = [
    { id:1 ,firstName: 'Jose',lastName: 'Gutierrez', email:'jose@gmail.com',role:'student',color:'#432e41'},
    { id:2 ,firstName: 'Kevin',lastName: 'Castillo', email:'kevin@gmail.com',role:'student',color:'#efd423'},
]

export const books = [
    { id:1 ,title: 'Operación Kazán',author: 'Vallés, Vicente', publishedYear:'1922',genre:'dramático'},
    { id:2 ,title: 'El mentalista',author: 'Läckberg, Camilla', publishedYear:'0000',genre:'lírico'},
]

export const getAdmin = (id) =>{
    return admins.find(result => result.id == id) || console.log('error')
}
export const getRole = [
    {id: '1',name:'admin'},
    {id: '2',name:'student'}
];

export const getUsers = () =>{
    return users.map((user) => adapterUser(user));
}