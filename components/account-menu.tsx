import { signOut } from "next-auth/react";
import { FC } from "react";

interface AccountMenuProps {
    visible?: boolean;
}

export const AccountMenu: FC<AccountMenuProps> = (props) => {
    if (!props.visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex items-center gap-3 w-full">
                    <img src="/images/default-blue.png" alt="Avatar" className="w-8 rounded-md" />
                    <p className="text-white text-sm group-hover/item:underline">Username</p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div className="px-3 text-center text-white text-sm hover:underline" onClick={() => signOut()}>
                    Sign out
                </div>
            </div>
        </div>
    );
};
