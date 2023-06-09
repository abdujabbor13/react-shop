import GooItem from './GooItem'

export default function GoodList(props) {
  const {goods = [], addToBasket} = props

  if(!goods.length) {
    return <h1>Nothing here</h1>
  }

  return (
    <div className='goods'>
      {goods.map(item => (
        <GooItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  )
}