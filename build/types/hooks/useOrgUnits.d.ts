declare const useOrgUnits: (orgUnitIds: any) => {
    orgUnits: any;
    error: import("@dhis2/app-service-data").FetchError | undefined;
    loading: boolean;
};
export default useOrgUnits;
