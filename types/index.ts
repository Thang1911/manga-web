import { ReactNode } from "react";

export interface childrenProps {
    children?: ReactNode;
}

export interface genresProps {
    index: number;
    id: string;
    name: string;
    description: string;
}

export interface searchValueProps {
    searchValue: string;
}

export interface chaptersProps {
    id: number;
    name: string;
}

export interface mangaProps {
    id: string;
    title: string;
    thumbnail: string;
    is_trending: boolean;
    short_description: string;
    lastest_chapter?: string[];
    genres?: string[];
    status: string;
    total_views: string;
    total_comments: string;
    followers?: string;
    update_at: string;
    authors: string;
}

export interface buttonProps {
    id: number;
    label: string;
}