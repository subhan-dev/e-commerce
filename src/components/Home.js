import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder, Container } from 'semantic-ui-react'

const cards = [
    {
        avatar: './assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png',
        date: 'Joined in 2013',
        header: 'Helen',
        description: 'Primary Contact',
    },
    {
        avatar: './assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png',
        date: 'Joined in 2013',
        header: 'Matthew',
        description: 'Primary Contact',
    },
    {
        avatar: './assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png',
        date: 'Joined in 2013',
        header: 'Molly',
        description: 'Primary Contact',
    },
    {
        avatar: './assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png',
        date: 'Joined in 2013',
        header: 'Molly',
        description: 'Primary Contact',
    },
    {
        avatar: './assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png',
        date: 'Joined in 2013',
        header: 'Molly',
        description: 'Primary Contact',
    },
]

class Home extends Component {

    state = { loading: false }

    handleLoadingClick = () => {
        this.setState({ loading: true })

        setTimeout(() => {
        this.setState({ loading: false })
        }, 3000)
    }

    
    render() {
        const { loading } = this.state
        return (
            <Fragment>
                <Container style={{marginTop:"75px"}}>
                <Button loading={loading} onClick={this.handleLoadingClick} primary>
                Simulate loading
                </Button>
                <Divider />
        
                <Card.Group doubling itemsPerRow={4} stackable>
                {cards.map( card => (
                    <Card key={card.header}>
                    {loading ? (
                        <Placeholder>
                        <Placeholder.Image square />
                        </Placeholder>
                    ) : (
                        <Image src={card.avatar} />
                    )}
        
                    <Card.Content>
                        {loading ? (
                        <Placeholder>
                            <Placeholder.Header>
                            <Placeholder.Line length='very short' />
                            <Placeholder.Line length='medium' />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                            <Placeholder.Line length='short' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                        ) : (
                        <Fragment>
                            <Card.Header>{card.header}</Card.Header>
                            <Card.Meta>{card.date}</Card.Meta>
                            <Card.Description>{card.description}</Card.Description>
                        </Fragment>
                        )}
                    </Card.Content>
        
                    <Card.Content extra>
                        <Button disabled={loading} primary>
                        Add
                        </Button>
                        <Button disabled={loading}>Delete</Button>
                    </Card.Content>
                    </Card>
                ))}
                </Card.Group>
                </Container>
            </Fragment>
        )
    }
}

export default Home
