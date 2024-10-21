import CustomFormulaBuilder from "@/components/custom-formula-builder";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorsSchemeForGraph, DATA_TYPE, OPERATOR } from "@/lib/types";
import { cn, COLORS_FOR_GRAPH } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Children, CSSProperties, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { LuBarChart, LuRefreshCw } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbCheck, TbInfoCircle } from "react-icons/tb";
import Select, { components } from "react-select";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  identifier: z.string().min(2, {
    message: "Identifier must be selected.",
  }),
  dimension: z.string().min(2, {
    message: "Dimension must be selected.",
  }),
});

interface PieChartCreationProps {
  identifiers: string[];
  dimensions: string[];
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

export const PieChartCreation: React.FC<PieChartCreationProps> = ({
  dimensions,
  filterPropertieOperators,
  filterPropertieValues,
  filterProperties,
  identifiers,
  isUpdate = false,
  updateProps,
  units,
  dashboardRedirectionOptions,
  onSaveOrUpdateChart,
  onViewChart,
  rootStyles,
  isViewChartLoading,
}) => {
  const [btnType, setBtnType] = useState<"view" | "save">("view");

  const [customFilters, setCustomFilters] = useState<
    {
      name: string;
      operator: OPERATOR;
      data_type: DATA_TYPE | string;
      value: string[];
    }[]
  >(isUpdate && updateProps?.customFilters ? updateProps?.customFilters : []);

  const [customization, setCustomization] = useState<{
    colorScheme: ColorsSchemeForGraph;
    chartType: "pieChart" | "donutChart";
    unit: string | null;
    showDataValues: boolean;
    showDataLabels: boolean;
    showlegends: boolean;
    dashboardRedirectionUrl: string | null;
  }>({
    colorScheme:
      isUpdate && updateProps?.customization.colorScheme
        ? updateProps?.customization.colorScheme
        : "rainbowOf10",
    chartType:
      isUpdate && updateProps?.customization?.chartType
        ? updateProps?.customization?.chartType
        : "pieChart",
    unit:
      isUpdate && updateProps?.customization?.unit
        ? updateProps?.customization?.unit
        : null,
    showDataValues:
      isUpdate && updateProps?.customization?.showDataValues
        ? updateProps?.customization?.showDataValues
        : false,
    showDataLabels:
      isUpdate && updateProps?.customization?.showDataLabels
        ? updateProps?.customization?.showDataLabels
        : false,
    showlegends:
      isUpdate && updateProps?.customization?.showlegends
        ? updateProps?.customization?.showlegends
        : false,
    dashboardRedirectionUrl:
      isUpdate && updateProps?.customization?.dashboardRedirectionUrl
        ? updateProps?.customization?.dashboardRedirectionUrl
        : null,
  });

  const colorsArray: {
    label: string;
    value: string;
  }[] = Object.keys(COLORS_FOR_GRAPH)?.map((color) => ({
    label: color,
    value: color,
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: isUpdate ? updateProps?.visualization?.name : "",
      identifier: isUpdate ? updateProps?.visualization?.identifier : "",
      dimension: isUpdate ? updateProps?.visualization?.dimension : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (btnType === "view") {
      onViewChart({
        visualization: values,
        customization,
        customFilters,
      });
    } else {
      onSaveOrUpdateChart({
        visualization: values,
        customization,
        customFilters,
      });
      setCustomFilters([]);
      setCustomization({
        colorScheme: "rainbowOf10",
        chartType: "pieChart",
        unit: null,
        showDataValues: false,
        showDataLabels: false,
        showlegends: false,
        dashboardRedirectionUrl: null,
      });
      form.reset();
    }
  }

  const handleViewChartDisabled = useMemo(() => {
    return customFilters.some(
      (filter) =>
        filter.name === "" ||
        filter.data_type === "" ||
        filter.value.length === 0
    );
  }, [customFilters]);

  return (
    <Card
      className="p-6 flex flex-col gap-5 min-w-[700px]"
      id="pie-chart-creation"
      style={{
        ...rootStyles,
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-2xl font-medium">Pie Chart</CardTitle>
            <CardDescription className="text-base">
              Breaks down data into segments, illustrating each category's
              contribution to the whole.
            </CardDescription>
          </div>
          <div className="w-full">
            <Tabs defaultValue="visualization" className="w-full">
              <TabsList className="border-none bg-transparent shadow-none">
                <TabsTrigger
                  value="visualization"
                  className="h-10 rounded-none border-b-2 border-transparent text-lg data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:font-normal data-[state=active]:text-slate-900 data-[state=active]:ring-0 data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-slate-900 data-[state=active]:shadow-none"
                >
                  Data Visualization
                </TabsTrigger>

                <TabsTrigger
                  value="customization"
                  className="h-10 rounded-none border-b-2 border-transparent text-lg data-[state=active]:border-slate-900 data-[state=active]:bg-transparent data-[state=active]:font-normal data-[state=active]:text-slate-900 data-[state=active]:ring-0 data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-slate-900 data-[state=active]:shadow-none"
                >
                  Customization
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="visualization"
                className="mt-3 flex flex-col gap-3 data-[state=inactive]:hidden "
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">
                        Name of Visualization
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name of Visualization"
                          className="h-10 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="identifier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">Identifier</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          isMulti={false}
                          closeMenuOnSelect={true}
                          hideSelectedOptions={false}
                          isClearable
                          unstyled
                          options={
                            identifiers?.map((id) => ({
                              label: id,
                              value: id,
                            })) ?? []
                          }
                          value={
                            field.value
                              ? {
                                  label: field.value,
                                  value: field.value,
                                }
                              : null
                          }
                          onChange={(pair) => {
                            field.onChange(pair?.value ?? "");
                          }}
                          placeholder="Identifier"
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
                                <span>{props.label}</span>
                                {props.isSelected && (
                                  <TbCheck className="text-green-500" />
                                )}
                              </div>
                            ),
                          }}
                          classNames={{
                            control: ({ isFocused }) =>
                              cn(
                                "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                                isFocused &&
                                  "border-blue-600 ring-1 ring-blue-500"
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
                            dropdownIndicator: () =>
                              "text-gray-300 hover:text-gray-500",
                            menu: () =>
                              "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                            groupHeading: () => "",
                            option: () =>
                              cn("hover:bg-gray-100 p-2 rounded-md"),
                            noOptionsMessage: () => "",
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dimension"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">Dimension</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          isMulti={false}
                          closeMenuOnSelect={true}
                          hideSelectedOptions={false}
                          isClearable
                          unstyled
                          options={
                            dimensions?.map((id) => ({
                              label: id,
                              value: id,
                            })) ?? []
                          }
                          value={
                            field.value
                              ? {
                                  label: field.value,
                                  value: field.value,
                                }
                              : null
                          }
                          onChange={(pair) => {
                            field.onChange(pair?.value ?? "");
                          }}
                          placeholder="Dimension"
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
                                <span>{props.label}</span>
                                {props.isSelected && (
                                  <TbCheck className="text-green-500" />
                                )}
                              </div>
                            ),
                          }}
                          classNames={{
                            control: ({ isFocused }) =>
                              cn(
                                "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
                                isFocused &&
                                  "border-blue-600 ring-1 ring-blue-500"
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
                            dropdownIndicator: () =>
                              "text-gray-300 hover:text-gray-500",
                            menu: () =>
                              "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                            groupHeading: () => "",
                            option: () =>
                              cn("hover:bg-gray-100 p-2 rounded-md"),
                            noOptionsMessage: () => "",
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-1 mt-4 w-full">
                  <div className="flex w-full items-start justify-between">
                    <span>Custom Filters</span>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (customFilters.length > 0) {
                          setCustomFilters((prev) => [
                            ...prev,
                            {
                              name: "",
                              operator: "EQ",
                              data_type: "",
                              value: [],
                            },
                          ]);
                        } else {
                          setCustomFilters([
                            {
                              name: "",
                              operator: "EQ",
                              data_type: "",
                              value: [],
                            },
                          ]);
                        }
                      }}
                      title="Add Filters"
                      type="button"
                    >
                      <Plus />
                    </Button>
                  </div>

                  {customFilters.length > 0 && (
                    <ScrollArea className={cn("w-full", "h-[30vh]")}>
                      <Card className="w-full bg-slate-50 shadow-none p-6">
                        <div className="flex w-full flex-col gap-1 border-l border-slate-300">
                          {customFilters?.reverse()?.map((filter, index) => (
                            <CustomFormulaBuilder
                              {...filter}
                              index={index}
                              key={index}
                              customFilters={customFilters}
                              setCustomFilters={setCustomFilters}
                              filterPropertieOperators={
                                filterPropertieOperators
                              }
                              filterPropertieValues={filterPropertieValues}
                              filterProperties={filterProperties}
                            />
                          ))}
                        </div>
                      </Card>
                    </ScrollArea>
                  )}
                </div>
              </TabsContent>
              <TabsContent
                value="customization"
                className="mt-3 flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="colors">Colors</label>
                  <Select
                    isMulti={false}
                    closeMenuOnSelect={true}
                    hideSelectedOptions={false}
                    unstyled
                    options={colorsArray}
                    value={
                      customization.colorScheme
                        ? {
                            label: customization.colorScheme as string,
                            value: customization.colorScheme as string,
                          }
                        : null
                    }
                    onChange={(pair) => {
                      setCustomization((prev) => ({
                        ...prev,
                        colorScheme: pair?.value as ColorsSchemeForGraph,
                      }));
                    }}
                    placeholder="Colors"
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
                      Option: ({ innerProps, ...props }) => (
                        <div
                          {...innerProps}
                          {...props}
                          className="flex justify-between items-center w-full hover:bg-gray-100 p-2 rounded-md"
                        >
                          <span>{props.label}</span>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {COLORS_FOR_GRAPH[
                                props.label as ColorsSchemeForGraph
                              ]?.map((color) => (
                                <div
                                  key={color}
                                  style={{
                                    backgroundColor: color,
                                  }}
                                  className={"size-2.5"}
                                />
                              ))}
                            </div>
                            <TbCheck
                              className={cn(
                                props.isSelected
                                  ? "text-green-500"
                                  : "text-transparent"
                              )}
                            />
                          </div>
                        </div>
                      ),
                      Control: (props) => {
                        const children = props.children;
                        return (
                          <components.Control {...props}>
                            {Children.map(children, (child, index) => {
                              if (index === 0) return child;
                            })}

                            <div className="flex mr-2">
                              {COLORS_FOR_GRAPH[customization.colorScheme].map(
                                (color) => (
                                  <div
                                    key={color}
                                    style={{
                                      backgroundColor: color,
                                    }}
                                    className={"size-2.5"}
                                  />
                                )
                              )}
                            </div>

                            {Children.map(children, (child, index) => {
                              if (index > 0) return child;
                            })}
                          </components.Control>
                        );
                      },
                    }}
                    classNames={{
                      control: ({ isFocused }) =>
                        cn(
                          "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
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
                      dropdownIndicator: () =>
                        "text-gray-300 hover:text-gray-500",
                      menu: () =>
                        "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                      groupHeading: () => "",
                      option: () => cn("hover:bg-gray-100 p-2 rounded-md"),
                      noOptionsMessage: () => "",
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex col-span-1 flex-col gap-1 ">
                    <label htmlFor="type" className="font-normal">
                      Pie Chart Type
                    </label>
                    <Select
                      isMulti={false}
                      closeMenuOnSelect={true}
                      hideSelectedOptions={false}
                      unstyled
                      options={[
                        {
                          label: "Pie Chart",
                          value: "pieChart",
                        },
                        {
                          label: "Donut Chart",
                          value: "donutChart",
                        },
                      ]}
                      value={
                        customization?.chartType
                          ? {
                              label:
                                customization?.chartType === "donutChart"
                                  ? "Donut Chart"
                                  : "Pie Chart",
                              value: customization?.chartType as
                                | "pieChart"
                                | "donutChart",
                            }
                          : null
                      }
                      onChange={(pair) => {
                        setCustomization((prev) => ({
                          ...prev,
                          chartType: pair?.value as "pieChart" | "donutChart",
                        }));
                      }}
                      placeholder="Chart Type"
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
                            <span>{props.label}</span>
                            {props.isSelected && (
                              <TbCheck className="text-green-500" />
                            )}
                          </div>
                        ),
                      }}
                      classNames={{
                        control: ({ isFocused }) =>
                          cn(
                            "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
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
                        dropdownIndicator: () =>
                          "text-gray-300 hover:text-gray-500",
                        menu: () =>
                          "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                        groupHeading: () => "",
                        option: () => cn("hover:bg-gray-100 p-2 rounded-md"),
                        noOptionsMessage: () => "",
                      }}
                    />
                  </div>

                  <div className="flex col-span-1 flex-col gap-1">
                    <label htmlFor="unit">Dimension Units</label>
                    <Select
                      isMulti={false}
                      closeMenuOnSelect={true}
                      hideSelectedOptions={false}
                      isClearable
                      unstyled
                      options={units.map((unit) => ({
                        label: unit,
                        value: unit,
                      }))}
                      value={
                        customization.unit
                          ? {
                              label: customization.unit,
                              value: customization.unit,
                            }
                          : null
                      }
                      onChange={(pair) => {
                        setCustomization((prev) => ({
                          ...prev,
                          unit: pair?.value as string,
                        }));
                      }}
                      placeholder="Dimension Units"
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
                            <span>{props.label}</span>
                            {props.isSelected && (
                              <TbCheck className="text-green-500" />
                            )}
                          </div>
                        ),
                      }}
                      classNames={{
                        control: ({ isFocused }) =>
                          cn(
                            "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
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
                        dropdownIndicator: () =>
                          "text-gray-300 hover:text-gray-500",
                        menu: () =>
                          "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                        groupHeading: () => "",
                        option: () => cn("hover:bg-gray-100 p-2 rounded-md"),
                        noOptionsMessage: () => "",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 px-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="legends"
                      checked={customization.showlegends}
                      onCheckedChange={(checked: boolean) =>
                        setCustomization((prev) => ({
                          ...prev,
                          showlegends: checked,
                        }))
                      }
                    />
                    <label htmlFor="legends">Show Legends</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="labels"
                      checked={customization.showDataLabels}
                      onCheckedChange={(checked: boolean) =>
                        setCustomization((prev) => ({
                          ...prev,
                          showDataLabels: checked,
                        }))
                      }
                    />
                    <label htmlFor="labels">Show Data Labels</label>
                  </div>

                  {customization.showDataLabels && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="values"
                        checked={customization.showDataValues}
                        onCheckedChange={(checked: boolean) =>
                          setCustomization((prev) => ({
                            ...prev,
                            showDataValues: checked,
                          }))
                        }
                      />
                      <label htmlFor="values">Show Data Values</label>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex items-center gap-1">
                    <label htmlFor="redirection">Dashboard Redirection </label>
                    <TbInfoCircle
                      className="text-gray-500"
                      title={
                        "It will redirect to a particular dashboard when clicking on the visualization"
                      }
                    />
                  </div>
                  <Select
                    isMulti={false}
                    closeMenuOnSelect={true}
                    hideSelectedOptions={false}
                    isClearable
                    unstyled
                    options={dashboardRedirectionOptions}
                    value={
                      customization.dashboardRedirectionUrl
                        ? dashboardRedirectionOptions.find(
                            (option) =>
                              option.value ===
                              customization.dashboardRedirectionUrl
                          )
                        : null
                    }
                    onChange={(pair) => {
                      setCustomization((prev) => ({
                        ...prev,
                        dashboardRedirectionUrl: pair?.value as string,
                      }));
                    }}
                    placeholder="Dashboard Redirection"
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
                          <span>{props.label}</span>
                          {props.isSelected && (
                            <TbCheck className="text-green-500" />
                          )}
                        </div>
                      ),
                    }}
                    classNames={{
                      control: ({ isFocused }) =>
                        cn(
                          "bg-white border border-gray-300 rounded-md p-2 min-h-10 w-full",
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
                      dropdownIndicator: () =>
                        "text-gray-300 hover:text-gray-500",
                      menu: () =>
                        "p-2 mt-2 border border-gray-200 bg-white rounded-md",
                      groupHeading: () => "",
                      option: () => cn("hover:bg-gray-100 p-2 rounded-md"),
                      noOptionsMessage: () => "",
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-end gap-3 px-0">
            <Button
              type="submit"
              onClick={() => {
                setBtnType("view");
              }}
              className="bg-slate-700 px-4 py-3 text-white hover:bg-slate-800 flex items-center gap-2"
              disabled={handleViewChartDisabled}
            >
              {isViewChartLoading && (
                <>
                  <Spinner />
                </>
              )}
              {!isViewChartLoading && <LuBarChart />}
              View Chart
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setBtnType("save");
              }}
              disabled={handleViewChartDisabled}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 flex items-center gap-2"
            >
              {isUpdate ? (
                <>
                  <LuRefreshCw className="size-4" />
                  Update Visualization
                </>
              ) : (
                <>
                  <MdOutlineDashboardCustomize className="size-4" />
                  Add to Dashboard
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
