import { ChakraProps, Select } from "@chakra-ui/react";
import { countries } from "country-data";
import { ChangeEventHandler } from "react";
import { bgColor } from "../lib/color";

type CountrySelectorProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
  id: string;
} & ChakraProps;

const CountrySelector = ({
  onChange,
  value,
  id,
  ...props
}: CountrySelectorProps) => {
  return (
    <Select
      variant="flushed"
      sx={{
        option: {
          backgroundColor: bgColor,
        },
      }}
      onChange={onChange}
      value={value}
      id={id}
      {...props}
    >
      <option value=""></option>
      {countries.all
        .filter((c) => c.emoji)
        .map((c) => (
          <option key={c.name} value={c.alpha2}>
            {c.emoji} {c.name}
          </option>
        ))}
    </Select>
  );
};

export default CountrySelector;
