import { TextField } from '@mui/material';
import { TextMaskCustom } from '../TextMaskCustom/TextMaskCustom';
import './InputCustom.scss';

const InputCustom = (props) => {
  const { value, onChange, label, type, error } = props;

  return (
    <div className="input__container">
      <TextField
        id="input-basic"
        label={label}
        value={value}
        onChange={onChange}
        variant="filled"
        size="medium"
        color="primary"
        className={`input__textfield ${error && 'error'}`}
        error={error}
        InputProps={
          type === 'telephone'
            ? {
                inputComponent: TextMaskCustom,
              }
            : {}
        }
        {...props}
      />
    </div>
  );
};

export default InputCustom;
