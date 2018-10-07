import React from 'react'
import { 
  Button,
  Icon,
  Card,
} from 'semantic-ui-react'

const BrewPlace = ({ name }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>
)

export default BrewPlace