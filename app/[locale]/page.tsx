import { getLanguage, Locale, i18n } from "@/get-language";

export default async function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {

  const lang = await getLanguage(locale);

  return (
    <>
      
    </>
  );
}