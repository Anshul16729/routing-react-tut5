import { withRouter} from 'react-router-dom';

function User(prop){
    console.log (prop.match.params.id)
    return (
        <div>
            <h1>Hi this is User Number {prop.match.params.id} </h1>
            <h1>Hi this is User Name {prop.match.params.name} </h1>
        </div>
    )
}

export default withRouter(User);