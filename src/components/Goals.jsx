import React, { useState } from 'react'
import './Goals.css'

const Goals = ({ goals, setGoals }) => {
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        reward: '',
        deadline: ''
    })

    const handleAddClick = () => {
        setShowForm(prev => !prev)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        if (formData.title.trim()) {
            const newGoal = { ...formData, completed: false }
            setGoals(prev => [...prev, newGoal])
            setFormData({ title: '', description: '', reward: '', deadline: '' })
            setShowForm(false)
        }
    }

    const handleCheckboxChange = (index) => {
        const updatedGoals = [...goals]
        updatedGoals[index].completed = !updatedGoals[index].completed
        setGoals(updatedGoals)
    }

    const handleDelete = (index) => {
        const updatedGoals = goals.filter((_, i) => i !== index)
        setGoals(updatedGoals)
    }

    return (
        <div className='goals-container'>
            <button className='add-btn' onClick={handleAddClick}>+</button>

            {showForm && (
                <div className={`goal-form ${showForm ? '' : 'hidden'}`}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Goal Title'
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name='description'
                        placeholder='Goal Description'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        name='reward'
                        placeholder='Reward'
                        value={formData.reward}
                        onChange={handleInputChange}
                    />
                    <input
                        type='date'
                        name='deadline'
                        value={formData.deadline}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit}>Add</button>
                </div>
            )}

            {goals.length > 0 && (
                <div className='goal-card-grid'>
                    {goals.map((goal, index) => (
                        <div key={index} className='goal-card'>
                            <div className='goal-header'>
                                <input
                                    type='checkbox'
                                    checked={goal.completed}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <h3 style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                                    {goal.title}
                                </h3>
                            </div>

                            <p style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                                {goal.description}
                            </p>

                            <div className='goal-meta'>
                                <span>🎁 {goal.reward}</span>
                                <span>📅 {goal.deadline}</span>
                            </div>

                            <button className='delete-btn' onClick={() => handleDelete(index)}>🗑 Delete</button>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Goals
