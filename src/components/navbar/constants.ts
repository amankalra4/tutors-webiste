export type IRefName = "seekAndBuildRef" | "productsRef";
export type IRouting = "/" | "/about-us" | "/pricing";

type INavItems = {
    name: string;
    refName: IRefName | null;
    route: string | null;
};

const homePageNavItems: INavItems[] = [
    {
        name: "Seek & Build",
        refName: "seekAndBuildRef",
        route: null
    },
    {
        name: "Products",
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
    }
];

const aboutUsNavItems: INavItems[] = [
    {
        name: "Home",
        refName: null,
        route: "/"
    },
    {
        name: "Pricing",
        refName: null,
        route: "/pricing"
    }
];

const pricingNavItems: INavItems[] = [
    {
        name: "Home",
        refName: null,
        route: "/"
    },
    {
        name: "About Us",
        refName: null,
        route: "/about-us"
    }
];

interface IHeaderItems {
    itemsToBeShown: INavItems[];
    currentPage: IRouting;
}

export const headerItems: IHeaderItems[] = [
    {
        itemsToBeShown: homePageNavItems,
        currentPage: "/"
    },
    {
        itemsToBeShown: aboutUsNavItems,
        currentPage: "/about-us"
    },
    {
        itemsToBeShown: pricingNavItems,
        currentPage: "/pricing"
    }
];
