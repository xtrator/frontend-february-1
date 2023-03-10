import { useContext, useRef } from "react";
import { PageContext } from "./PageContext";

export default function Cats() {
  const itemsRef = useRef(null);
  const page = useContext(PageContext);

  function getMap() {
    if (itemsRef.current === null) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  function scrollToId(catId) {
    const map = getMap();
    const node = map.get(catId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  if (page !== 2) return <></>;
  return (
    <div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <nav style={styleNav}>
        <button onClick={() => scrollToId(1)}>Pulga</button>
        <button onClick={() => scrollToId(5)}>Mocca</button>
        <button onClick={() => scrollToId(9)}>Gary</button>
      </nav>
      <ul style={styleObjUl}>
        {catList.map((cat) => {
          return (
            <li
              style={styleObjLi}
              key={cat.id}
              ref={(node) => {
                const map = getMap(cat.id, node);
                if (node) {
                  map.set(cat.id, node);
                }
              }}
            >
              <img src={cat.imageUrl} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const styleObjUl = {
  boxSizing: "border-box",
  paddingLeft: "20px",
  listStyle: "none",
  whiteSpace: "nowrap",
};

const styleObjLi = {
  boxSizing: "border-box",
  listStyle: "none",
  whiteSpace: "nowrap",
  display: "inline",
  padding: "0.5rem",
};

const styleNav = {
  textAlign: "center",
  boxSizing: "border-box",
};

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
