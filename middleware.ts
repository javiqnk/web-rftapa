import { i18nRouter } from 'next-i18n-router';


import { i18n } from "./get-language";

export function middleware(request : any) {
    return i18nRouter(request, i18n);
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};