import React from 'react'
import { 
  Button,
  Icon,
  Card,
} from 'semantic-ui-react'

const Hopsin = ({ name, id, upVote, downVote }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
    { upVote &&
        <Card.Content extra>
          <Button basic onClick={() => downVote(id)}>
            <Icon name="thumbs down" />
          </Button>
          <Button basic onClick={() => upVote(id)}>
            <Icon name="thumbs up" />
          </Button>
        </Card.Content>
    }
  </Card>
)

export default Hopsin