import React, { useState } from 'react';
import { Alert} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    e.target.reset();
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="my-5">
            <h2 className="my-5">Make an Admin:</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} />
                <button type="submit" class="btn btn-success">add</button>
               
            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;