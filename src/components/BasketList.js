import BasketItem from './BasketItem'

export default function BasketList(props) {
  const {order, decrQuantity, incrQuantity} = props

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return(
    <div className='bsk'>
      <ul className='collection basket-list'>
        <li className='collection-item active'>
          Basket
        </li>
          {order.length ? order.map(item => {
            return(
              <BasketItem
                key={item.id}
                {...item}
                removeFrombasket={props.removeFrombasket}
                decrQuantity={decrQuantity}
                incrQuantity={incrQuantity}
              />
            )
          }) : <li className='collection-item'>basket is empty</li>}
        <li className='collection-item active'>
          total Price: <b>$</b> {totalPrice}
        </li>
        <i className='material-icons basket-close' onClick={props.handleBasket}>close</i>
      </ul>
    </div>
  )
}