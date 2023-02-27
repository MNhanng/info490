export function CreateButton(props) {
    const buttonType = props.type;
    const title = props.title;
    const label = props.label;
    return (
        <div>
            <button onClick={props.onClick} type={buttonType} aria-label={label}>{title}</button>
        </div>

    );
}