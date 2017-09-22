import React, {Component} from 'react';


export default class ContentList extends Component {

    constructor (props) {
        super(props)
        this.state= {
            contents: [
                {title: 'Profile', id: 1},
                {title: 'Experience', id: 2},
                {title: 'Skill', id: 3}
            ]
        }

    }
    render() {
        return (
            <div id="list">
                <ul>
                    {this.state.contents.map((content)=>{
                        return (<Li key={content.id} title={content.title}/>)
                    })
                    }
                </ul>
            </div>
        )
    }
}

let Li = (props) => {
    return ( <li><a><p>{props.title}</p></a> </li>);
}