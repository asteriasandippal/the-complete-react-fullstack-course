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
                },
                massage: {
                    element: 'textarea',
                    value: '',
                    label: true,
                    labelText: 'Massage',
                    config: {
                        name: 'massage_area',
                        placeholder: 'Enter your Massage',
                        row: 4,
                        cols: 36
                    }
                },
                age: {
                    element: 'select',
                    value: '',
                    label: true,
                    labelText: 'Age',
                    config: {
                        name: 'age_select',
                        placeholder: 'Enter your Age',
                        options: [
                            {
                                val: '1',
                                text: '10-20'
                            },
                            {
                                val: '2',
                                text: '20-30'
                            },
                            {
                                val: '3',
                                text: '+30'
                            }
                        ]
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