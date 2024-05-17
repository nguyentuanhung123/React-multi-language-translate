import {useTranslation} from 'react-i18next' // step-5

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        // <div className="capitalize">Welcome about us || Hung Dev</div>
        <div className="capitalize">{t('welcome')} {t('about')} {t('page')} || Hung Dev</div>
    )
}

export default AboutUs
