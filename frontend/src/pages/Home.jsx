import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserTable from '../components/UserTable'

const Home = () => {

  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editUserId, setEditUserId] = useState(null)
  const baseURL = 'http://localhost:8000/api/users'

  const fetchUsers = async () => {
    const result = await axios.get(`${baseURL}`)
    setUsers(result.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function handleSubmit() {
    if (editUserId) {
      await axios.put(`${baseURL}/${editUserId}`, formData)
    } else {
      await axios.post(`${baseURL}`, formData)
    }
    setFormData({ name: '', email: '', age: '' })
    setEditUserId(null)
    fetchUsers();
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleEdit(user) {
    setFormData({ name: user.name, email: user.email, age: user.age })
    setEditUserId(user._id)
  }
  async function handleDelete(id) {
    await axios.delete(`${baseURL}/${id}`)
    fetchUsers();
  }

  return (
    <>
      <div>Home Component</div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
        <input type="number" placeholder='Age' name='age' value={formData.age} onChange={handleChange} />

        <button type='submit'>{editUserId ? 'Update' : 'Add'}</button>
      </form>

      <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  )
}

export default Home