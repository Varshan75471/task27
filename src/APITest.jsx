import React, { useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from './services/userServices';

const APITest = () => {
    useEffect(() => {
        // Fetch users
        getUsers()
            .then((response) => console.log('Fetched Users:', response.data))
            .catch((error) => console.error('Error fetching users:', error));

        // Add a user
        addUser({ name: 'New User', email: 'newuser@example.com' })
            .then((response) => console.log('User Added:', response.data))
            .catch((error) => console.error('Error adding user:', error));

        // Update a user
        updateUser(1, { name: 'Updated User', email: 'updated@example.com' })
            .then((response) => console.log('User Updated:', response.data))
            .catch((error) => console.error('Error updating user:', error));

        // Delete a user
        deleteUser(1)
            .then(() => console.log('User Deleted'))
            .catch((error) => console.error('Error deleting user:', error));
    }, []);

    return <div>Check the console for API test results.</div>;
};

export default APITest;
