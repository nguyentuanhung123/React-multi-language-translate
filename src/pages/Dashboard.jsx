import { useTranslation } from "react-i18next";


const Dashboard = () => {
    const {t} = useTranslation();

    return (
        <div className="capitalize">{t('welcome')} {t('dashboard')} {t('page')} || Hung Dev</div>
    )
}

export default Dashboard
