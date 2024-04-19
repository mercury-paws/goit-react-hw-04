import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const notify = () =>
    toast.success("Fill in the input search field", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.input.value;
    if (searchQuery.trim() === "") {
      return notify();
    }
    onSubmit(searchQuery);
    searchQuery.reset
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      ;
      <header>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="input"
          />

          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}
