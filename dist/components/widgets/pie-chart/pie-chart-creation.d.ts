import { ColorsSchemeForGraph, DATA_TYPE, OPERATOR } from '../../../lib/types';
import { CSSProperties } from "react";
interface PieChartCreationProps {
    identifiers: string[];
    dimensions: string[];
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
    isUpdate?: boolean;
    updateProps?: {
        visualization: {
            name: string;
            identifier: string;
            dimension: string;
        };
        customFilters: {
            name: string;
            operator: OPERATOR;
            data_type: DATA_TYPE | string;
            value: string[];
        }[];
        customization: {
            colorScheme: ColorsSchemeForGraph;
            chartType: "pieChart" | "donutChart";
            unit: string | null;
            showDataValues: boolean;
            showDataLabels: boolean;
            showlegends: boolean;
            dashboardRedirectionUrl: string | null;
        };
    };
    units: string[];
    dashboardRedirectionOptions: {
        label: string;
        value: string;
    }[];
    onViewChart: (data: {
        visualization: {
            name: string;
            identifier: string;
            dimension: string;
        };
        customFilters: {
            name: string;
            operator: OPERATOR;
            data_type: DATA_TYPE | string;
            value: string[];
        }[];
        customization: {
            colorScheme: ColorsSchemeForGraph;
            chartType: "pieChart" | "donutChart";
            unit: string | null;
            showDataValues: boolean;
            showDataLabels: boolean;
            showlegends: boolean;
            dashboardRedirectionUrl: string | null;
        };
    }) => void;
    onSaveOrUpdateChart: (data: {
        visualization: {
            name: string;
            identifier: string;
            dimension: string;
        };
        customFilters: {
            name: string;
            operator: OPERATOR;
            data_type: DATA_TYPE | string;
            value: string[];
        }[];
        customization: {
            colorScheme: ColorsSchemeForGraph;
            chartType: "pieChart" | "donutChart";
            unit: string | null;
            showDataValues: boolean;
            showDataLabels: boolean;
            showlegends: boolean;
            dashboardRedirectionUrl: string | null;
        };
    }) => void;
    rootStyles?: CSSProperties;
    isViewChartLoading?: boolean;
}
export declare const PieChartCreation: React.FC<PieChartCreationProps>;
export {};
