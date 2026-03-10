import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">List of Characters</h2>
        <div className="flex flex-wrap gap-4">
          {characters.map((character, index) => (
            <Character url={character} index={index} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
