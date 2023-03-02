const Formation = (props) => {
    return ( <>
    <h1>Hello, {props.name}!</h1>
    <h2>It is {new Date().toLocaleTimeString()}</h2>
    </> );
}
 
export default Formation;