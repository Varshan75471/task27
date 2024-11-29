import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css'; // Ensure the updated CSS is applied

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleEdit = (user) => setCurrentUser(user);
    const handleClearEdit = () => setCurrentUser(null);

    return (
        <div className="app-container">
            <header>
                <h1>React Axios CRUD</h1>
            </header>
            <main>
                <UserForm
                    currentUser={currentUser}
                    onSave={() => setCurrentUser(null)}
                    clearEdit={handleClearEdit}
                />
                <UserList onEdit={handleEdit} />
            </main>
        </div>
    );
};

export default App;
