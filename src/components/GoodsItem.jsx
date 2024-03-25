function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: {regularPrice: price},
    displayAssets: [{full_background: image}],
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content ">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({name, id, price})}>
          Купить
        </button>
        <span className="right" style={{fontSize: '1.8rem'}}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}
export {GoodsItem};
