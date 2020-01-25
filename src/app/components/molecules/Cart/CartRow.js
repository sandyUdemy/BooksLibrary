import React from "react";
import { useDispatch } from "react-redux";
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';
import { ProductImage } from "../../atoms/image/Image";
import { removeFromCart } from "../../../lib/actions/shoppingCart";
import { Text } from "../../atoms/text"; 
import { StyledCart, StyledHalfBlock } from './styles'
import { CardHeader } from '../Card'
import { TrashButton, QuantityInput } from './_components'

const ProductInformation = ({ title, isbn, classNames }) =>  {
  const { isMobile } = useWindowDimensions();
  return (<CardHeader
    classNames={classNames}
    title={title}
    subTitle={isbn}
    fontSize={isMobile ? "12" : "18"} />)
}

const UnitPrice = ({ price }) => (<Text.BOLD>€{price.toFixed(2)}</Text.BOLD>)
const PriceTotal = ({ price, quantity }) => (<Text.BOLD>€{(price * quantity).toFixed(2)}</Text.BOLD>)

export const CartRow = ({ item }) => {
  const { id, details, quantity } = item
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <StyledCart>
      <StyledHalfBlock className="first-half">
        <ProductImage {...details} width="80"  />
        <ProductInformation {...details} className="product-information"/>
        <UnitPrice {...details} />
      </StyledHalfBlock>

      <StyledHalfBlock className="second-half">
        <QuantityInput {...item} />
        <PriceTotal quantity={quantity} {...details} />
        <TrashButton remove={remove} /> 
      </StyledHalfBlock>
    </StyledCart>
  );
}