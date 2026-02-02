import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { sampleLists, sampleItemsByListId } from "../data/sampleLists";

function ListItem() {
  const { listId } = useParams();
  const navigate = useNavigate();

  const list = sampleLists.find((l) => l.id === listId);
  const items = sampleItemsByListId[listId] ?? [];

  if (!list) {
    return (
      <>
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-8">
          <p className="text-gray-600">List not found.</p>
          <button
            onClick={() => navigate("/home")}
            className="mt-4 text-red-600 hover:underline"
          >
            ← Back to lists
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/home")}
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center gap-1"
        >
          ← Back to lists
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {list.title}
        </h2>
        <p className="text-gray-500 text-sm mb-6">{list.description}</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border bg-white ${
                item.completed
                  ? "border-gray-200 text-gray-500"
                  : "border-gray-200 text-gray-900"
              }`}
            >
              <span
                className={`w-4 h-4 rounded border flex-shrink-0 ${
                  item.completed ? "bg-gray-400 border-gray-400" : "border-gray-300"
                }`}
                aria-hidden
              />
              <span
                className={item.completed ? "line-through" : ""}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        {items.length === 0 && (
          <p className="text-gray-500 py-4">No items in this list yet.</p>
        )}
      </main>
    </>
  );
}

export default ListItem;
