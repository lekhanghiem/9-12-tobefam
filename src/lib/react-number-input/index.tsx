import { NumericFormat } from "react-number-format";
import { forwardRef } from "react";
export const CurrencyNumericFormat = forwardRef(function NumberFormatCustom(
  props: any,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.floatValue,
          },
        });
      }}
      thousandSeparator=","
      prefix=""
      valueIsNumericString
    />
  );
});
