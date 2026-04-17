import type { Component } from "vue"



export interface HomeService {
    id : number,
    icon: Component
    title: string,
    desc: string,
    color : string
}