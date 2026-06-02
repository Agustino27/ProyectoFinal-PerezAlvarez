import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;