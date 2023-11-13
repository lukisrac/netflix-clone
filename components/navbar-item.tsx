import { FC } from "react";

interface NavarItemProps {
    label: string;
}

export const NavbarItem: FC<NavarItemProps> = (props) => {
    return <div className="text-white cursor-pointer hover:text-gray-300 transition">{props.label}</div>;
};
