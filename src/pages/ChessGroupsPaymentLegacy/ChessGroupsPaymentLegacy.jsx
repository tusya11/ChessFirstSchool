import PricingSection from '../GroupCoursesPage/parts/PricingSection/PricingSection'
import { oldPrice } from '../GroupCoursesPage/consts/consts'

const ChessGroupsPaymentLegacy = () => {
    return <>
        <PricingSection price={oldPrice}/>
    </>
}

export default ChessGroupsPaymentLegacy;