import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortValueChange = (sortValue: string) => {
    // ganti search params 'sort' dengan value 'price-asc'

    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };

  console.log("search -param", searchParams);

  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>Sort: {searchParams.get("sort")}</li>
        <li>Name: {searchParams.get("name")}</li>
      </ul>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => handleSortValueChange("sort-price-asc")}>Sort price asc</button>
        <button onClick={() => handleSortValueChange("sort-price-desc")}>Sort price desc</button>
        <button onClick={() => handleSortValueChange("popular")}>popular</button>
      </div>
    </div>
  );
};

export default ProductListPage;
