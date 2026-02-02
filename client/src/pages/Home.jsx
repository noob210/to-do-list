import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { sampleLists } from "../data/sampleLists";

function Home() {
  const navigate = useNavigate();

  const handleListClick = (listId) => {
    navigate(`/list-item/${listId}`);
  };

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          My To-Do Lists
        </h2>
        <ul className="space-y-3">
          {sampleLists.map((list) => (
            <li key={list.id}>
              <button
                onClick={() => handleListClick(list.id)}
                className="w-full text-left px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
              >
                <span className="font-medium text-gray-900 block">
                  {list.title}
                </span>
                <span className="text-sm text-gray-500 mt-0.5 block">
                  {list.description} · {list.itemCount} items
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
