import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import {
    UserIcon,
} from '@heroicons/react/24/outline'

export function CardAvatars({
    children = "",
    title = "",
    className = ""
}: any) {

    return (
        <div className={`w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export function CardAvatarsPerson({
    name = "",
    urlImage = ""
}: any) {

    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Avatar className="w-8 h-8 rounded-full">
                        <AvatarImage className="w-8 h-8 rounded-full" src={urlImage} alt={name + " image"} />
                        <AvatarFallback className="w-8 h-8 rounded-full dark:bg-gray-950"><UserIcon className="w-5 h-5" /></AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                </div>
            </div>
        </li>
    )
}