import { ColorsSchemeForGraph } from '../../../lib/types';
import React, { CSSProperties } from "react";
interface DataPoint {
    key: string;
    value: number;
}
interface PieChartProps {
    data: DataPoint[];
    title: string;
    rootStyles?: CSSProperties;
    titleStyles?: CSSProperties;
    chartContainerStyles?: CSSProperties;
    height?: number;
    width?: number;
    colorScheme?: ColorsSchemeForGraph;
    showDataValues?: boolean;
    showDataLabels?: boolean;
    showlegends?: boolean;
    unit?: string | null;
    legendSymbol?: "circle" | "rectangle";
    chartType?: "pieChart" | "donutChart";
    loading?: boolean;
}
export declare const PieChart: React.FC<PieChartProps>;
export {};
