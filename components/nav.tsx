'use client'

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx';

import ModeToggle from "@/components/ThemeToggle";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    UsersIcon,
    TrophyIcon,
    UserPlusIcon,
    AcademicCapIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ArrowLongRightIcon,
    BookOpenIcon,
    BookmarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Button } from './ui/button';

const navigation = [
    {
        name: 'Federación',
        href: '#',
        subNavigation: [
            { name: 'Historia', description: 'Historia de la federación', href: '/federacion/historia', icon: BookOpenIcon },
            { name: 'Junta directiva', description: 'Junta directiva de la FTAPA', href: '/federacion/junta', icon: UserGroupIcon },
            { name: 'Clubes', description: 'Clubes asociados a la federación', href: '/federacion/clubes', icon: BookmarkIcon },
        ],
        callsToAction: [
            { name: 'Contacto', href: '/contacto', icon: PhoneIcon },
            { name: 'Portal del federado', href: 'https://federados.rfeta.es/acceder/', icon: UsersIcon },
        ]
    },
    {
        name: 'Competiciones',
        href: '#',
        subNavigation: [],
        callsToAction: []
    },
    {
        name: 'Noticias', href: '/noticias', subNavigation: [], callsToAction: []
    },
    {
        name: 'Circulares', href: '/circulares', subNavigation: [], callsToAction: []
    },
    {
        name: 'Reglamento', href: '/reglamento', subNavigation: [], callsToAction: []
    },
    {
        name: 'Contacto', href: '/contacto', subNavigation: [], callsToAction: []
    }
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header>
            <div className='w-full fixed top-0 bg-white dark:bg-slate-800 md:bg-white/80 md:dark:bg-slate-800/80 shadow z-50 md:backdrop-blur'>
                <nav className="container flex items-center justify-between py-4 " aria-label="Global">
                    <Link className="flex lg:flex-1" href='/'>
                        <div>
                            <span className="sr-only">Federación Asturiana de Tiro con Arco</span>
                            <Image className="h-11 w-auto" src="/img/logos/logo.png" alt="" height={40} width={40} />
                        </div>
                        <div className='ms-2 mt-2'>
                            <div className="leading-4">
                                Federación Asturiana
                            </div>
                            <div className="leading-4">
                                de Tiro con Arco
                            </div>
                        </div>
                    </Link>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8 dark:text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-2 xl:gap-x-6">
                        {navigation.map((item) => {

                            if (item.subNavigation.length == 0) {
                                return (
                                    <Link href={item.href} key={item.name} className="text-sm font-semibold text-gray-900 leading-10 dark:text-white align-middle">
                                        {item.name}
                                    </Link>
                                );
                            }

                            return (
                                <div key={item.name} className="text-sm font-semibold text-gray-900 cursor-pointer">
                                    <HoverCard openDelay={0}>
                                        <HoverCardTrigger className="m-0 flex items-center text-sm font-semibold text-gray-900 dark:text-white leading-10">
                                            {item.name}
                                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-600 dark:text-gray-400" aria-hidden="true" />
                                        </HoverCardTrigger>
                                        <HoverCardContent sideOffset={0} className="overflow-hidden p-0 mt-0 w-fit rounded-3xl shadow-lg ring-1 ring-gray-900/5 bg-white dark:bg-gray-900 dark:border-2 ">
                                            <div className="p-4">
                                                {item.subNavigation.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                                                    >
                                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-sky-700" aria-hidden="true" />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <Link href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </Link>
                                                            <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-800">
                                                {item.callsToAction.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                                                    >
                                                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            );
                        })}
                        {/* {navigation.map((item) => (} */}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm font-semibold leading-6 border p-1 px-2 rounded-lg text-gray-900">
                        Acceder <span aria-hidden="true">&rarr;</span>
                    </a> */}
                        <div>
                            <ModeToggle />
                        </div>
                        <div className='ms-2'>
                            <Link target='_blank' href="https://federados.rfeta.es/acceder/">
                                <Button size="sm" variant="outline">Portal del federado <ArrowLongRightIcon className="w-5 ms-1" /> </Button>
                            </Link>
                        </div>

                    </div>
                </nav>
            </div>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <div>
                                <span className="sr-only">Federación Asturiana de Tiro con A</span>
                                <Image className="h-9 w-auto" src="/img/logos/logo.png" alt="" height={36} width={36} />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-8 w-8 dark:text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => {

                                    if (item.subNavigation.length == 0) {
                                        return (
                                            <>
                                                <Link
                                                    href={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            </>
                                        );
                                    }
                                    return (
                                        <Disclosure key={item.name} as="div" className="-mx-3">
                                            {({ open }: any) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 dark:hover:bg-gray-900 hover:bg-gray-50 ">
                                                        {item.name}
                                                        <ChevronDownIcon
                                                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 space-y-2">
                                                        {item.subNavigation.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-900"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    );
                                })}
                            </div>
                            <div className="py-6 flex">
                                <ModeToggle />
                                <div className='ms-2'>
                                    <Link target='_blank' href="https://federados.rfeta.es/acceder/">
                                        <Button size="sm" variant="outline">Portal del federado <ArrowLongRightIcon className="w-5 ms-1" /> </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
