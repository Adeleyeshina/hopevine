import type { Component } from "vue"

export interface HomeService {
    id: number,
    icon: Component
    title: string,
    desc: string,
    color: string
}

export type Testimonial = {
    rating: number;
    message: string;
    name: string;
    event: string;
};

export type Service = {
    icon: Component,
    name: string,
    desc: string,
    attrs: string[],
    color: string,
    img: string
}

export interface Value {
    icon: Component,
    title: string,
    desc: string,
    color : string
}