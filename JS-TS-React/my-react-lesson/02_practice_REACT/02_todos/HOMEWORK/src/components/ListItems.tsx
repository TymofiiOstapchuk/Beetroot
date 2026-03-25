import Item from "@/components/Item";
import Filter from "@/components/Filter";

const ListItems = ({ title, items }: any) => {
  const updateFilter = (searchTerm: any) => {
    // todo
  };

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={""} onChange={updateFilter} />
      <ul className="mb-3 p-0">
        <Item item={[]} />
      </ul>
    </section>
  );
};

export default ListItems;
