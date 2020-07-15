function PageHead(props) {
    return <section className="uk-height-medium uk-position-relative uk-background-cover" data-src={props.image} data-srcset={`${props.image}, ${props.imageMobile} 639w`} uk-img="">
        <div className="uk-position-cover uk-overlay uk-overlay-primary"></div>
        <div className="uk-position-center uk-position-small uk-light uk-text-center">
            <h1 className="uk-h2 uk-margin-small">{props.title}</h1>
            <div className="uk-margin-remove-last-child uk-text-light">
                <p>{props.content}</p>
            </div>
        </div>
    </section>
}

export default PageHead