export default function Card(props) {
  const {quantity = 0, handleBasket = Function.prototype} = props
  return(
    <div className='cart blue-grey darken-2 white-text' onClick={handleBasket}>
      <i className=" material-icons">add_shopping_cart</i>
      {quantity ? <span className='card-quantity'>{quantity}</span> : null}
    </div>
  )
}