'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button";

import { ChevronDownIcon } from '@heroicons/react/24/solid'

import { usePathname } from 'next/navigation'

export default function LanguageSelector(props: any) {

    const pathname = usePathname()

    function getLangName(i: number) {
        return props.langsNames[i];
    }

    function bgLang(lang: string) {
        return lang === props.selectedLang ? "bg-gray-100 dark:bg-[#1e293b]" : "";
    }

    function changeLang(lang: string) {
        var newPathName = pathname.replace("/" + props.selectedLang, "");
        window.location.href = "/" + lang + newPathName;
    }

    var i = 0;

    const langs = props.langs;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex">
                <div className="flex place-items-center text-nowrap shadow px-3 py-1.5 border text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-[#1e293b]">
                    <div>
                        <img src={`/img/flags/${props.selectedLang}.jpg`} alt="" className="h-3.5 w-5 rounded-sm border me-2" />
                    </div>
                    <div>
                        {getLangName(langs.indexOf(props.selectedLang))}
                    </div>
                    <div>
                        <ChevronDownIcon className="size-4 ms-1" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {langs.map((lang: any) => (
                    <DropdownMenuItem onClick={() => changeLang(lang)} className={`flex ${bgLang(lang)}`} key={lang}>
                        <div>
                            <img src={`/img/flags/${lang}.jpg`} alt="" className="h-3.5 w-5 rounded-sm border me-2" />
                        </div>
                        <div>
                            {getLangName(i++)}
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}