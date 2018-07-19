import React from 'react';

class FormFields extends React.Component {
    constructor(props) {
        super(props);
        this.renderFields = this.renderFields.bind(this);
        this.renderTemplate = this.renderTemplate.bind(this);
    }

    renderFields() {
        let formArray = [];
        for (const element in this.props.formData) {
            formArray.push({
                id: element,
                settings: this.props.formData[element]
            })
        }

        return formArray.map((item, i) => (
            <div key={i} className="form_element">
                {this.renderTemplate(item)}
            </div>
        ));
    }

    renderTemplate(data) {
        let formTemplate = '';
        let value = data.settings;
        console.log(value);
        switch(value.element) {
            case('input'):
                formTemplate = 'sas';
                break;
            default:
                formTemplate = '';
        }
    }

    render() {
        return (
            <div>
                {this.renderFields()}
            </div> 
        );
    }
}

export default FormFields;
