export interface Interview {
    startTime: string;
    endTime: string;
    date: Date;
    status: string;
    userId: string;
    meetingId: string;
    enableReschedule: boolean;
    actions?: TableActions[]
}

interface TableActions {
    label: string;
    isEnabled: boolean;
    icon?: string;
}