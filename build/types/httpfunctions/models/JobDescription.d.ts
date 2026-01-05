export type JobDescription = {
    id: string;
    type: string;
    name: string;
    status: string;
    start_time: (string | null);
    end_time: (string | null);
    result: (string | null);
};
