
import "./GoBack.scss"
import vector from '../img/Vector.svg'
import { t } from "i18next"
import { useTranslation } from "react-i18next"
const GoBack =()=>{
    const {t, i18n} = useTranslation(["translation"])
    return <div className="vector-contain">
        <img  className='vector-img' src = {vector} alt="atras"></img>
        <span className='volver'>{t("volver")}</span>
        
    </div>
}
export default GoBack