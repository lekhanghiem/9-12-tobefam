/* eslint-disable react/display-name */
import { Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { forwardRef } from "react";

const CustomAutocomplete = forwardRef((props: any, ref: any) => {
  return (
    <Autocomplete
      {...props}
      ref={ref}
      PaperComponent={(props: any) => (
        <Paper {...props} className="custom-autocomplete-paper" />
      )}
    />
  );
});

export default CustomAutocomplete;
