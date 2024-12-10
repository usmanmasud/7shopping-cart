

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0)
    const { cart } = useSelector(state => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [])

    // console.log(cart, totalCarts)

    return (
        <div>
            Cart
        </div>
    )
}
