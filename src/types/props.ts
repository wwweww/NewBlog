export type HeaderItem = {
    key: string | number,
    label: string,
    children: string | any
}

export interface HeaderProps {
    items?: HeaderItem[],
    className?: string,
    defaultActiveKey?: string | number | null,
    onChange?: (activeKey?: HeaderItem) => void,
}

export interface ListProps {
    title?: string,
    items?: string[],
    className?: string
}