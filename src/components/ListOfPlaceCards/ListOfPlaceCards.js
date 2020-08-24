import React from "react";
import { Row, Col } from 'antd';

import { PlaceCard } from "../PlaceCard/PlaceCard";

export function ListOfPlaceCards() {
  const places = [
    {
      cover: '/images/logo512.png',
      title: 'titulo 1',
      description: 'sdfsdf sf sdf 1',
      price: 50,
    },
    {
      cover: 'https://media.staticontent.com/media/pictures/5769cfcb-13f3-45b2-806a-f484a4146305/295x200',
      title: 'titulo 2',
      description: 'sdfsdf sf sdf 1',
      price: 50,
    },
    {
      cover: 'https://media.staticontent.com/media/pictures/5769cfcb-13f3-45b2-806a-f484a4146305/295x200',
      title: 'titulo 3',
      description: 'sdfsdf sf sdf 1',
      price: 50,
    },
    {
      cover: 'https://media.staticontent.com/media/pictures/5769cfcb-13f3-45b2-806a-f484a4146305/295x200',
      title: 'titulo 4',
      description: 'sdfsdf sf sdf 1',
      price: 50,
    }
  ]

  return (
    <div>
      <div className='container'>
        <Row gutter={20}>
          {places.map(place =>
            <Col span={6}>
              <PlaceCard
                cover={place.cover}
                title={place.title}
                description={place.description}
                price={place.price}
              />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}
