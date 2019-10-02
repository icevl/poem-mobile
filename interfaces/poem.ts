export interface Poem {
    id: number;
    comments_count: number;
    title: string;
    content: string;
    dedicate_to: string[];
    likes_count: number;
    views_count: number;
    created_at: Date;
    user: any;
    comments: any;
    likes: any;
}
