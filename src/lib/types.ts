export type SlotStatus = "online" | "offline" | "online + offline" | "online booked" | "offline booked" | "available";
export type Slot = {start: string; end: string; status: SlotStatus};

export type ProviderEntity = {
    id: string;
    name: string;
    service: string;
    type: string;
    center: string;
    schedule: Record<string, Slot[]>;
}
export type Filters = {
    service: string;
    type: string;
    center: string;
};