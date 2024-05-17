import {useTranslation} from 'react-i18next' // step-5

const Home = () => {
    const {t} = useTranslation();

    return (
        <div className="capitalize">{t('welcome')} {t('home')} {t('page')} || Hung Dev</div>
    )
}

export default Home