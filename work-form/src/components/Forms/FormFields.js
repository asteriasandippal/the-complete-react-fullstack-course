import React from 'react';

class FormFields extends React.Component {
    constructor(props) {
        super(props);
        this.renderFields = this.renderFields.bind(this);
        this.renderTemplate = this.renderTemplate.bind(this);
        this.showLabel = this.showLabel.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
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

    showLabel(show, label) {
        return show ? 
            <label>{label}</label>
        : null;
    }

    renderTemplate(data) {
        let formTemplate = '';
        let values = data.settings;
        switch(values.element) {
            case('input'):
                formTemplate = (
                    <div>
                        {this.showLabel(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            value={values.value}
                            onChange={
                                event => this.changeHandler(event, data.id)
                            }
                        />
                    </div>
                );
                break;
            default:
                formTemplate = '';
        }

        return formTemplate;
    }

    changeHandler(event, id) {
        const newState = this.props.formData;
        newState[id].value = event.target.value;
        this.props.change(newState);
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
