import React from 'react';
import { Segment, Card, Icon, Image, Label } from 'semantic-ui-react';

class Drink extends React.Component {



    render() {

        const { item} = this.props;

        return (
            <Segment inverted>
                <Image src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} size='mini' centered />
                <Card.Content>
                    <Card.Header style={{textAlign:'center'}}>{item&&item.name||'empty'}</Card.Header>
                    <Card.Meta style={{textAlign:'center'}}>₩ {item&&item.price||0}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Card.Header style={{textAlign:'center'}}>
                        <Icon name='cubes'/><Label content={item&&item.quantity||0}/>
                    </Card.Header>
                </Card.Content>
            </Segment>
        );
    }
}

export default Drink;