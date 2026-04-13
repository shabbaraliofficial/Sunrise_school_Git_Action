import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function PageMeta({ title, description }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${title} | ${t('school.name')}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [description, t, title]);

  return null;
}
