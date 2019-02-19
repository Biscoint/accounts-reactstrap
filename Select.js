import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';

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
      onChange,
      focusInput,
      error,
      defaults,
      options,
      autocomplete,
      name,
    } = this.props;

    const { defaultOption } = this.state;

    return (
      <FormGroup>
        {defaults.showLabels && <Label>{displayName}</Label>}

        <Input
          id={_id}
          type="select"
          name={name}
          autoFocus={focusInput}
          invalid={Boolean(error)}
          onChange={e => onChange(e, _id)}
          onBlur={e => onChange(e, _id)}
          autoComplete={autocomplete}
          defaultValue={defaultOption ? defaultOption.value : options[0].value}
        >
          {options.map(opt => <option key={opt.key || opt.value} value={opt.value}>{opt.text}</option>)}
        </Input>
        {error && <FormFeedback>{error.errStr}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default SelectField;
