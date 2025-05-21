import { useEffect } from 'react';

const SITE_SUFFIX = 'Pizza shop';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    // Se título vazio, só usa o sufixo
    const fullTitle = title ? `${title} | ${SITE_SUFFIX}` : SITE_SUFFIX;

    document.title = fullTitle;
  }, [title]);
}
