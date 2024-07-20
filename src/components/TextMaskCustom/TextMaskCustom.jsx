import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export const TextMaskCustom = forwardRef((props, ref) => {
  const masks = [
    {
      mask: "0 (000) 000-00-00",
    },
    {
      mask: "000 000 000 000",
    },
    {
      mask: "0 000 000 000 000",
    },
    {
      mask: "000000000000000",
    },
  ];
  const { onChange, label, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask={masks}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      placeholder={label}
    />
  );
});
