import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Loader from './Loader'
import GoodList from './GoodList'
import Card from './Card';
import BasketList from './BasketList';

export default function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setIsBasketShov] = useState(false)

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
        (orderItem) => orderItem.id === item.id
        )

    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }
  }

  const handleBasket = () => {
    setIsBasketShov(!isBasketShow)
  }

  const removeFrombasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
  }

  const incrQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }

  const decrQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity:newQuantity >= 0 ? newQuantity : 0
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      }
    })
    .then((respons) => respons.json())
    .then((data) => {
      data.featured && setGoods(data.featured)
      setLoading(false)
    })
  }, [])

  return(
    <div className='content container'>
      <Card quantity={order.length} handleBasket={handleBasket} />
      {loading ? <Loader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList
      order={order}
      handleBasket={handleBasket}
      removeFrombasket={removeFrombasket}
      incrQuantity={incrQuantity}
      decrQuantity={decrQuantity}
      />}
    </div>
  )
}