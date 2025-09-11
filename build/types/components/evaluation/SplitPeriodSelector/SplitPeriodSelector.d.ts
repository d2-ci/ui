import { SingleSelectFieldProps } from '@dhis2/ui';
interface SplitPeriodSelectorProps extends SingleSelectFieldProps {
    splitPeriods: string[];
    setSelectedSplitPeriod: (splitPeriod: string) => void;
    selectedSplitPeriod: string;
}
declare const SplitPeriodSelector: ({ splitPeriods, setSelectedSplitPeriod, selectedSplitPeriod, ...singleSelectFieldProps }: SplitPeriodSelectorProps) => import("react/jsx-runtime").JSX.Element;
export default SplitPeriodSelector;
