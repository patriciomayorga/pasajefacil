import React from "react";
import { Radio, Row, Col, Input, DatePicker, Button } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

import './SearchBox.css';

export function SearchBox() {

  return (
    <div className='SearchBoxOut'>
      <div className='container'>
        <div className='SearchBox'>
          <h1>
            Vuelos
            con reserva flexible
          </h1>
          <p>
            Encuentra pasajes aéreos con la posibilidad de cambiar las fechas de vuelo.
          </p>
          <Radio.Group defaultValue={1}>
            <Radio value={1}>Ida</Radio>
            <Radio value={2}>Ida y Vuelta</Radio>
          </Radio.Group>
          <Row gutter={10}>
            <Col span={5}>
              <h4>Origen</h4>
              <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            </Col>
            <Col span={5}>
              <h4>Destino</h4>
              <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            </Col>
            <Col span={4}>
              <h4>Fecha de Ida</h4>
              <DatePicker size="large" />
            </Col>
            <Col span={4}>
              <h4>Fecha de Retorno</h4>
              <DatePicker size="large" />
            </Col>
            <Col span={3}>
              <h4>Pasajeros</h4><Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            </Col>
            <Col span={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
              <h4> </h4>
              <Button icon={<SearchOutlined />} size="large" block>Buscar</Button>
            </Col>
          </Row>
          <p>
            Encuentra pasajes aéreos con la posibilidad de cambiar las fechas de vuelo.
          </p>
        </div>
      </div>
    </div>
  )
}