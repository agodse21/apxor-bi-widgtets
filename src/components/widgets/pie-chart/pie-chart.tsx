import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { ColorsSchemeForGraph } from "@/lib/types";
import { COLORS_FOR_GRAPH } from "@/lib/utils";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { CSSProperties } from "react";

interface DataPoint {
  key: string;
  value: number;
}

interface PieChartProps {
  data: DataPoint[];
  title: string;
  // theme: "dark" | "light";
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

export const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  rootStyles,
  titleStyles,
  chartContainerStyles,
  height = 500,
  width = 600,
  colorScheme = "rainbowOf10",
  showDataLabels = false,
  showDataValues = false,
  showlegends = false,
  unit = null,
  legendSymbol = "circle",
  chartType = "pieChart",
  loading = false,
}) => {
  const colorsArray = COLORS_FOR_GRAPH[colorScheme];

  const chartData = data?.map((item) => ({
    name: item.key,
    y: item.value,
  }));

  const options: Highcharts.Options = {
    chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      type: "pie",
      width,
      height,
      backgroundColor: "transparent",
    },
    title: undefined,
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `
        ${this?.point?.name}<br>
       <b> ${this?.series?.name}: ${this?.point?.y} ${
          unit ? unit : ""
        } (${this?.point?.percentage?.toFixed(1)}%)</b>
      `;
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: showDataLabels,
          format: showDataValues
            ? `{point.name}<br /><b>{point.y} ${
                unit ? unit : ""
              } ({point.percentage:.1f}%)</b>`
            : "{point.name}",
          distance: 20,
        },
        showInLegend: showlegends,

        startAngle: 0,
        endAngle: 360,
        center: ["50%", "50%"],
        size: "80%",
      },
    },
    legend: {
      ...(legendSymbol === "rectangle" && {
        symbolRadius: 0,
      }),
      margin: 30,
    },
    series: [
      {
        type: "pie",
        innerSize: chartType === "donutChart" ? "50%" : 0,
        name: "value",
        data: chartData,
      },
    ],
    colors: colorsArray,
  };

  return (
    <Card style={{ ...rootStyles }} className="w-fit p-6">
      <span
        className="text-2xl font-medium"
        style={{
          ...titleStyles,
        }}
      >
        {title}
      </span>

      {loading && (
        <div className="min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center">
          <Spinner size={"medium"} />
        </div>
      )}

      {!loading && data?.length === 0 && (
        <div className="min-w-[400px] w-auto min-h-96 h-auto flex justify-center items-center">
          <span>No Data</span>
        </div>
      )}

      {!loading && data?.length > 0 && (
        <div
          className="w-fit h-fit p-1 mt-10"
          style={{
            ...chartContainerStyles,
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )}
    </Card>
  );
};
