import "./Definitions.css";
type Props = {
  word: string;
  meanings: any;
  category: string;
};

const Definitions: React.FC<Props> = ({ word, meanings, category }) => {
  console.log(meanings[0]?.phonetics[0]?.audio);
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio preload="auto" controls>
          <source
            src={meanings[0]?.phonetics[0]?.audio}
            type="audio/mpeg"
          ></source>
          Your browser does not support this
        </audio>
      )}
      {word === "" ? (
        <span className="subtitle">Type something to get definitions..</span>
      ) : (
        meanings.map((mean: any) =>
          mean.meanings.map((item: any) =>
            item.definitions.map((def: any, i: number) => (
              <div className="single-mean" key={i}>
                <span className="definition">{def.definition}</span>
                {def.example && (
                  <span>
                    <b>Example: </b> {def.example}
                  </span>
                )}
                <div className="synonyms">
                  {def.synonyms.length !== 0 && (
                    <span>
                      <b>Synonyms: </b>
                      {def.synonyms.map((syno: string, i: number) =>
                        i + 1 !== def.synonyms.length ? `${syno}, ` : `${syno}`
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
