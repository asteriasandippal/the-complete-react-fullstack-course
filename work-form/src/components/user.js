import React, { Component } from 'react';

import FormFields from './Forms/FormFields';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    text: 'text',
                    placeholder: 'Enter your Name'
                }
            },
            lastName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'lastName_input',
                    text: 'text',
                    placeholder: 'Enter your Last Name'
                }
            }
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                    />
                    <button type="submit">Submit</button>  
                </form>
            </div>
        )
    }
}

export default User;