import { useTranslation } from "react-i18next";


const ContactUs = () => {
    const {t} = useTranslation();

    return (
        <div className="capitalize">{t('welcome')} {t('contact')} {t('page')} || Hung Dev</div>
    )
}

export default ContactUs
