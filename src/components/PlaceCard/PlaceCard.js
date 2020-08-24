import React from "react";
import { Card } from 'antd';

import './PlaceCard.css'

const { Meta } = Card;

export function PlaceCard({ cover, title, description, price }) {
  return (
    <Card
      className='PlaceCard'
      hoverable
      cover={<img alt="example" src={cover} />}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      {price}
    </Card>
  )
}
