import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import { HighChartsData } from '../../../interfaces/Evaluation';
interface ResultPlotProps {
    data: HighChartsData;
    modelName: string;
    nameLabel?: string;
    syncZoom: boolean | Highcharts.AxisSetExtremesEventCallbackFunction;
    ref?: HighchartsReact.RefObject;
    maxY?: number;
}
export declare const ResultPlot: React.ForwardRefExoticComponent<Omit<ResultPlotProps, "ref"> & React.RefAttributes<HighchartsReact.RefObject>>;
export {};
