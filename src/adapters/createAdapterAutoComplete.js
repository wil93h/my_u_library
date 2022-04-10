export const adapterUser = (user) =>{
    return ({id:user.id,label:`${user.firstName} ${user.lastName}`})
}