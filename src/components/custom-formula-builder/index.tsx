import { DATA_TYPE, OPERATOR } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TbCheck, TbTrash } from "react-icons/tb";
import ReactSelect from "react-select";
import PropertyValueSelector from "../reusable-components/property-value-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CustomFormulaBuilderProps {
  name: string;
  operator: OPERATOR;
  data_type: DATA_TYPE | string;
  value: string[];
  index: number;
  id?: string;

  filterProperties: {
    attribute: string;
    type: DATA_TYPE;
  }[];

  filterPropertieOperators: (
    type: DATA_TYPE
  ) => { label: string; value: string }[];

  filterPropertieValues: (
    attribute: string
  ) => { label: string; value: string }[];

  customFilters: {
    name: string;
    operator: OPERATOR;
    data_type: DATA_TYPE | string;
    value: string[];
  }[];

  setCustomFilters: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        operator: OPERATOR;
        data_type: DATA_TYPE | string;
        value: string[];
      }[]
    >
  >;
}

export default function CustomFormulaBuilder({
  name,
  operator,
  data_type,
  value,
  index,
  id = "",
  customFilters,
  filterPropertieOperators,
  filterPropertieValues,
  filterProperties,
  setCustomFilters,
}: CustomFormulaBuilderProps) {
  const [operators, setOperators] = useState<
    { label: string; value: string }[]
  >([]);

  const [propertyValues, setPropertyValues] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (name) {
      setOperators(filterPropertieOperators(data_type as DATA_TYPE));
      setPropertyValues(filterPropertieValues(name));
    }
  }, [name, data_type]);

  return (
    <div
      id={`filters-${index}${id ? `-${id}` : ""}`}
      className="flex items-center gap-2 "
    >
      <div className="flex items-center gap-2" id="custom-formula-builder">
        <div className="w-8 border-b border-slate-300" />

        <ReactSelect
          isMulti={false}
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          isClearable
          unstyled
          options={filterProperties?.map((p) => ({
            label: p.attribute,
            value: p.attribute,
          }))}
          value={
            name
              ? {
                  label: name,
                  value: name,
                }
              : null
          }
          onChange={(pair) => {
            const dataType = pair?.value
              ? (filterProperties?.find((p) => p.attribute === pair?.value)
                  ?.type as DATA_TYPE)
              : "";

            setCustomFilters((prev) => {
              return prev.map((p, i) =>
                i === index
                  ? { ...p, name: pair?.value as string, data_type: dataType }
                  : p
              );
            });
          }}
          menuPlacement="auto"
          placeholder="Select property"
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }),
            multiValueLabel: (base) => ({
              ...base,
              whiteSpace: "normal",
              overflow: "visible",
            }),
            control: (base) => ({
              ...base,
              transition: "none",
            }),
          }}
          components={{
            IndicatorSeparator: null,
            Option: ({ innerProps, ...props }) => (
              <div
                {...innerProps}
                {...props}
                className="flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md"
              >
                <span className="max-w-[180px] truncate text-xs">
                  {props.label}
                </span>
                {props.isSelected && <TbCheck className="text-green-500" />}
              </div>
            ),
          }}
          classNames={{
            control: ({ isFocused }) =>
              cn(
                "bg-white border border-gray-300 rounded-md p-2 min-h-10  w-[200px]",
                isFocused && "border-blue-600 ring-1 ring-blue-500"
              ),
            placeholder: () => "text-gray-500",
            input: () => "",
            valueContainer: () => "",
            singleValue: () => "",
            multiValue: () => "",
            multiValueLabel: () => "",
            multiValueRemove: () => "",
            indicatorsContainer: () => "",
            clearIndicator: () =>
              "text-gray-300 hover:text-red-500 cursor-pointer",
            indicatorSeparator: () => "",
            dropdownIndicator: () => "text-gray-300 hover:text-gray-500",
            menu: () =>
              "p-2 mt-2 border border-gray-200 bg-white rounded-md max-h-[200px] overflow-hidden",
            groupHeading: () => "",
            option: () => cn("hover:bg-gray-100 p-2 rounded-md"),
            noOptionsMessage: () => "",
          }}
        />
        {name && (
          <Select
            value={operator}
            onValueChange={(value) => {
              setCustomFilters((prev) => {
                return prev.map((p, i) =>
                  i === index ? { ...p, operator: value as OPERATOR } : p
                );
              });
            }}
          >
            <SelectTrigger
              className="w-[100px] h-10 bg-white
           focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
            >
              <SelectValue
                placeholder="Operator"
                className="text-gray-500 data-[data=selected]:text-slate-900"
              />
            </SelectTrigger>
            <SelectContent className="w-[100px]">
              {operators.length > 0 &&
                operators?.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}

        {name && operator && (
          <PropertyValueSelector
            onChange={(value) => {
              setCustomFilters((prev) => {
                return prev.map((p, i) =>
                  i === index ? { ...p, value: value } : p
                );
              });
            }}
            options={propertyValues}
            value={value}
          />
        )}
      </div>
      <button
        onClick={() => {
          setCustomFilters((prev) => {
            return prev.filter((p, i) => i !== index);
          });
        }}
        title="Remove"
        className="hover:bg-slate-200 p-2 rounded-full"
      >
        <TbTrash className="text-red-500 size-5" />
      </button>
    </div>
  );
}
