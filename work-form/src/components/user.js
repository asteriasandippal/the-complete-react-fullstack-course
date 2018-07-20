import React, { Component } from 'react';

import FormFields from './Forms/FormFields';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.submitForm = this.submitForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }
    
    updateForm(newState) {
        this.setState(() => ({
            formData: newState
        }))
    }

    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        for (const key in this.state.formData) {
           dataToSubmit[key] = this.state.formData[key].value;
        }
        console.log(dataToSubmit);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                        change={newState => this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>  
                </form>
            </div>
        )
    }
}

export default User;