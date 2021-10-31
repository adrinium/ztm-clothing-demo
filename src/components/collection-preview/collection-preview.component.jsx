import './collection-preview.styles.scss';

const CollectionPreview = (props) => (
    <div className="collection-preview">
        <h1 className="title">{props.title}</h1>
        <div className="preview">
            {
                props.items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;