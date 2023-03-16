import OverallRatingPlaceholder from './OverallRatingPlaceholder.jsx'
import Header from './Header.jsx'
import StyleSelector from './StyleSelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import Actions from './Actions.jsx'

export default function ProductInfo () {

  return (
    <div>
      <OverallRatingPlaceholder />
      <Header />
      <StyleSelector />
      <SizeSelector />
      <Actions />
    </div>
  )
}