import { Temperature } from "../../loaders/weather/temperature.ts";
import { Quotes } from "../../loaders/zenquotes.ts";
export interface Props {
  text?: string;
  quotes: Quotes;
  temperature: Temperature | null;
}

export default function Exemplo({ quotes, text, temperature }: Props) {
  return (
    <>
      <div className="form-control">
        {quotes && <h1>{quotes.data[0]}</h1>}
        {text && <p>{text}</p>}
        {temperature && <p>{temperature?.celsius} graus</p>}
      </div>
    </>
  );
}
