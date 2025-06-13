import User from '../models/User.js'

//get
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}
//post
export const createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save()
    res.json({ msg: "User created successfully", user: user })
}
//put
export const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true })
        res.json({msg: "User Updated successfully", "Upadated user":updatedUser})
}
//delete
export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({"msg": "User deleted successfully"})
}