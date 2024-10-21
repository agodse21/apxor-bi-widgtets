import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { IoClose } from "react-icons/io5";
import { LuChevronDown } from "react-icons/lu";
import { TbCheck } from "react-icons/tb";
import Select, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
} from "react-select";

const controlStyles = {
  base: "border rounded-lg bg-white hover:cursor-pointer w-[200px] min-h-10",
  focus: "border-blue-600 ring-1 ring-blue-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5 w-fit";
const multiValueLabelStyles = "leading-6 py-0.5 max-w-[100px] truncate text-xs";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles =
  "p-1 mt-2 border border-gray-200 bg-white rounded-lg max-h-[200px] overflow-hidden";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded w-full truncate text-sm font-normal",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

const DropdownIndicator = (
  props: DropdownIndicatorProps<
    { label: string; value: string },
    boolean,
    GroupBase<{ label: string; value: string }>
  >
) => {
  return (
    <components.DropdownIndicator {...props}>
      <LuChevronDown />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (
  props: ClearIndicatorProps<
    { label: string; value: string },
    boolean,
    GroupBase<{ label: string; value: string }>
  >
) => {
  return (
    <components.ClearIndicator {...props}>
      <IoClose />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <IoClose />
    </components.MultiValueRemove>
  );
};

interface PropertyValueSelectorProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: { label: string; value: string }[];
}

export default function PropertyValueSelector({
  onChange,
  options,
  value,
}: PropertyValueSelectorProps) {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      unstyled
      options={options}
      value={
        value?.length > 0
          ? value?.map((item) => ({ label: item, value: item }))
          : null
      }
      onChange={(pair) => {
        const val = pair ? pair?.map((item) => item.value) : [];
        onChange(val as string[]);
      }}
      menuPlacement="auto"
      placeholder="Property Value"
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      components={{
        MultiValueRemove,
        DropdownIndicator,
        ClearIndicator,
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

            <TbCheck
              className={cn(
                props.isSelected ? "text-green-500" : "text-transparent"
              )}
            />
          </div>
        ),
      }}
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
}
