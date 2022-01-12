function Footer(props){

    return(
        <footer>
            <h3>{props.encourage}</h3>
            <p>{props.warning}</p>
        </footer>
    )
}

export default Footer;