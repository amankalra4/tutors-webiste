export type IRefName = "seekAndBuildRef" | "productsRef" | "footerRef";

type INavItems = {
    name: string;
    refName: IRefName | null;
    route: string | null;
};

const navItems: INavItems[] = [
    {
        name: "Seek & Build",
        refName: "seekAndBuildRef",
        route: null
    },
    {
        name: "Product",
        refName: "productsRef",
        route: null
    },
    {
        name: "Pricing",
        refName: null,
        route: "/pricing"
    },
    {
        name: "About Us",
        refName: null,
        route: "/about-us"
    },
    {
        name: "Contact Us",
        refName: "footerRef",
        route: null
    }
];

export { navItems };
