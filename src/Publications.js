import React from 'react';
import {Row, Col, ListGroup } from 'react-bootstrap';

import axios from 'axios';

const SS_URL = "https://api.semanticscholar.org/v1";
const USER = "1572245697";

class Publications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            papers: [],
            pubs: []
        };
    }

    componentDidMount() {
        axios.get(SS_URL + "/author/" + USER).then(res => {
            res.data.papers.forEach(pub => this.getPaper(pub.paperId));
        }).catch(err => {
            console.error(err);
        });
    }

    getPaper(paperId) {
        axios.get(SS_URL + "/paper/" + paperId).then(res => {
            const pubs = this.state.pubs.slice();
            pubs.push(res.data);
            this.setState({ pubs });
        }).catch(err => console.error(err));
    }

    render() {
        const { pubs } = this.state;
        const pubitems = pubs.map(pub => {
            const authors = pub.authors.map(author => {
                return <a key={author.authorId + author.name} href={author.url} style={{color: "gray"}}>{author.name}</a>
            }).reduce((prev, curr) => [prev, ", ", curr]);
            return (
                <ListGroup.Item key={pub.paperId}>
                    <a href={pub.url} style={{color: "black"}}><b>{pub.title}</b></a>
                    <br />
                    {authors}
                </ListGroup.Item>
            );
        });

        return (
            <Row>
                <Col>
                    <h4 className="text-center">Publications</h4>
                    <ListGroup>
                        {pubitems}
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

// function Publications() {
//     res = scholarly.user("chcRCpcAAAAJ").then()
//     return (
//         <Row>
//             <Col>
//                 <h1 className='text-center'>Publications</h1>
                
                
                
//             </Col>
//         </Row>
//     );
// }

export default Publications;