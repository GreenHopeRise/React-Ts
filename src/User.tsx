type UserProps = {
    name: string;
    age: number;
}

function User(props: UserProps){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default User