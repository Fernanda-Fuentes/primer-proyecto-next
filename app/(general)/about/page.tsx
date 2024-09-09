import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About Page','Ma Fer Fuentes','información','...'],
};

export default function AboutPage(){
    return(
        <span className="text-7xl">About Page</span>
    )
}