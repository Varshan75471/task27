import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../services/userServices';

const UserForm = ({ currentUser, onSave, clearEdit }) => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user.id) {
                await updateUser(user.id, user); // Update if user exists
            } else {
                await addUser(user); // Add new user
            }
            onSave(); // Refresh user list
            clearEdit(); // Clear form
            setUser({ name: '', email: '' }); // Reset form fields
        } catch (error) {
            console.error('Error saving user:', error);
            alert('Failed to save user.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{user.id ? 'Edit User' : 'Add User'}</h2>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <button type="submit">{user.id ? 'Update' : 'Add'}</button>
            {currentUser && (
                <button
                    type="button"
                    className="cancel"
                    onClick={clearEdit}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default UserForm;
