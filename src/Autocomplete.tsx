import { SyntheticEvent, useState } from 'react';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';

interface AutocompleteProps {
  ref?: React.Ref<any>;
  options: any[];
  placeholder?: string;
  onSelect: (placeID: string, description: string) => void;
  onChange: (text: string) => void;
}

function Autocomplete({
  ref = null,
  options,
  onSelect,
  onChange,
  placeholder = ''
}: AutocompleteProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (event: SyntheticEvent, newOption: any) => {
    if (newOption) {
      const { placeID, description } = newOption;
      onSelect(placeID, description);
    }
  };
  const handleOnInputChange = (event: SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <MuiAutocomplete
      ref={ref}
      options={options}
      getOptionLabel={(option) => option.description}
      popupIcon={null}
      sx={{
        '& .MuiOutlinedInput-root': {
          padding: 0,
          border: 'none'
        },
        '& .MuiInputLabel-root': {
          top: '50%',
          transform: 'translateY(-50%)',
          paddingLeft: '8px',
          display: isFocused ? 'none' : 'block',
          border: 'none'
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          slotProps={{
            inputLabel: {
              sx: {
                zIndex: -1
              }
            }
          }}
          label={`${isFocused ? '' : placeholder}`}
        />
      )}
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

export default Autocomplete;
