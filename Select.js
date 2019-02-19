import React from 'react';
import { FormGroup, Select, Label, FormFeedback } from 'reactstrap';

class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOption: null,
    };
  }

  componentDidMount() {
    const { _id, options, onChange } = this.props;

    const defaultOption = options.filter(o => o.default)[0];
    if (defaultOption) {
      // let parent know that this field has a default value
      onChange(defaultOption.value, _id);
      this.setState({ defaultOption });
    }
  }

  render() {
    const {
      _id,
      displayName,
      type,
      onChange,
      placeholder,
      required, // By default is true, if equals false than ignore
      icon,
      focusInput,
      error,
      defaults,
      options,
      autocomplete,
    } = this.props;

    const { defaultOption } = this.state;

    return (
      <FormGroup>
        {defaults.showLabels && <Label>{displayName}</Label>}
        <Select
          autoFocus={focusInput}
          type={type}
          invalid={Boolean(error)}
          onChange={e => onChange(e, _id)}
          onBlur={e => onChange(e, _id)}
          autoComplete={autocomplete}
          options={options}
          defaultValue={defaultOption ? defaultOption.value : options[0].value}
        />
        {error && <FormFeedback>{error.errStr}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default SelectField;
