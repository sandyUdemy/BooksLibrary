import React from "react";
import { CardHeader } from './CardHeader'
import { CardBody } from "./CardBody";
import { StyledCard } from './styles'

const Card = ({ children }) => (
    <StyledCard margin="20" className="card-body">
        <div className="row">
            {children}
        </div>
    </StyledCard>
)
export {
    CardHeader,
    CardBody
}
export default Card;
