export default function BasketItem(props) {
  const {id, name, price, quantity, incrQuantity, decrQuantity} = props

  return(
    <li className='collection-item'>
      {name} x{quantity} = <b>$</b>{price}
    <span className='secondary-content'>
      <a href='!#' className="waves-effect waves-light btn btnq" onClick={() => incrQuantity(id)}>
        <i className="material-icons left">exposure_plus_1</i>add
      </a>
      <a href='!#' className="waves-effect waves-light btn btnq"  onClick={() => decrQuantity(id)}
      style={{marginLeft: 10}}
      >
        <i className="material-icons left">exposure_minus_1</i>remove
      </a>
      <a href='!#' className="waves-effect waves-light btn btnq" style={{marginLeft: 10}}>
      <i className='material-icons basket-delete'
      onClick={() => props.removeFrombasket(id)}>delete_forever
      </i>
      </a>
    </span>
    </li>
  )
}