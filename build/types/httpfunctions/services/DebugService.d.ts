import type { JobResponse } from '../models/JobResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DebugService {
    /**
     * Run Add Numbers
     * Trigger a Celery task to add two numbers.
     * @param a
     * @param b
     * @returns any Successful Response
     * @throws ApiError
     */
    static runAddNumbersDebugAddNumbersGet(a: number, b: number): CancelablePromise<any>;
    /**
     * Trigger Exception
     * @returns JobResponse Successful Response
     * @throws ApiError
     */
    static triggerExceptionDebugTriggerExceptionPost(): CancelablePromise<JobResponse>;
    /**
     * Get Status
     * Get the status and result of a task.
     * @param taskId
     * @returns any Successful Response
     * @throws ApiError
     */
    static getStatusDebugGetStatusGet(taskId?: (string | null)): CancelablePromise<Record<string, any>>;
}
