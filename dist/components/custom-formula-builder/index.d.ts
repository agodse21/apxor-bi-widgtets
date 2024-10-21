import { DATA_TYPE, OPERATOR } from '../../lib/types';
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
    filterPropertieOperators: (type: DATA_TYPE) => {
        label: string;
        value: string;
    }[];
    filterPropertieValues: (attribute: string) => {
        label: string;
        value: string;
    }[];
    customFilters: {
        name: string;
        operator: OPERATOR;
        data_type: DATA_TYPE | string;
        value: string[];
    }[];
    setCustomFilters: React.Dispatch<React.SetStateAction<{
        name: string;
        operator: OPERATOR;
        data_type: DATA_TYPE | string;
        value: string[];
    }[]>>;
}
export default function CustomFormulaBuilder({ name, operator, data_type, value, index, id, customFilters, filterPropertieOperators, filterPropertieValues, filterProperties, setCustomFilters, }: CustomFormulaBuilderProps): import("react/jsx-runtime").JSX.Element;
export {};
