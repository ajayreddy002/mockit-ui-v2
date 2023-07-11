export interface Plan {
    _id: string;
    category: string;
    title: string;
    duration: number;
    objective: boolean;
    programming: boolean;
    skills: string[];
    priceId: string;
    price: number;
    isSelected: boolean
}
export interface Plans {
    plan: Plan[]
}