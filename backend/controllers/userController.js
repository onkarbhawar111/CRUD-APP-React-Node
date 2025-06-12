import User from '../models/User.js'

//get
export const getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users)
}
export const createUser = () =>{
    
}
export const updateUser = () =>{

}
export const deleteUser = () =>{

}