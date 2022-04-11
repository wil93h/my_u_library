
import getData from '../service/getData'

const usersExp = {
    admins:[{id:1 ,firstName: 'Operación',lastName: 'Vallés', email:'1922@mail.com',role:'admin'},],
    students:[{id:2 ,firstName: 'Harrison',lastName: 'Barrientos', email:'harrison@mail.com',role:'student'},],
}
export const users = async () =>{
    let users =  await getData('users');
    return users?.data || usersExp;
}

export const books = [
    { id:1 ,title: 'Operación Kazán',author: 'Vallés, Vicente', publishedYear:'1922',genre:'dramático',qty:3},
    { id:2 ,title: 'El mentalista',author: 'Läckberg, Camilla', publishedYear:'0000',genre:'lírico',qty:2},
]

export const getUser = async (id) =>{
    let users =  await getData(`users/${id}`);
    return users?.data ;

}
export const getRole = [
    {id: '1',name:'admin'},
    {id: '2',name:'student'}
];

export const getUsers =async () =>{
    let users =  await getData('users');
    return users?.data ;
}