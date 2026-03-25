import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About page",
    description: "about us",

};
export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div>
        <h2>I am about layout</h2>
        {children}
    </div>;
}