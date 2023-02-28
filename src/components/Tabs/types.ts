export enum TabsNames {
    All,
    Favorites,
    Popular
}

export type TabsType = {
    title: string;
    disabled: boolean;
    key: TabsNames;
}