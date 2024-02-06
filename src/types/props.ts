export type sideBarItem = {
    key: string | number,
    children?: string | any,
    handle?: () => void,
    className?: string,
    icon?: any,
    selectedIcon?: any,
}

export interface SideBarProps {
    items?: sideBarItem[],
    className?: string,
    defaultActiveKey?: string | number,
    onChange?: (activeKey?: sideBarItem) => any,
}

export type HeaderItem = {
    key: string | number,
    label: string,
    children: string | any
}

export interface HeaderProps {
    items?: HeaderItem[],
    className?: string,
    defaultActiveKey?: string | number | null,
    onChange?: (activeKey?: HeaderItem) => any,
}

export interface ListProps {
    title?: string,
    items?: string[],
    className?: string
}

export interface CPProps {
    name: string,
    qq: string | number,
    msg?: string,
    time?: string,
    className?: string,
    isSelector?: boolean,
}
