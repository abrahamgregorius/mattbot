import { useRef, useState } from "react";
import Container from "../components/Container";
import Main from "../components/Main";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const ref = useRef(null);

  const handleChange = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCWs31ECxHFlal-G5bXUGjDWAH7416MWqc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const resJson = await res.json();
    setResult(resJson.candidates[0]?.content?.parts[0]?.text);
    ref.current.value = "";
  };

  return (
    <>
      <Main>
        <Container
          className={"flex flex-col min-h-screen justify-center gap-4 items-center"}
        >
          <h1 className="text-4xl font-semibold">Mattbot 🤡</h1>
          <form onSubmit={(e) => handleChange(e)} >
            <div className="form-control flex flex-col justify-center sm:flex-row gap-4">
              <input
                type="text"
                className="p-4 bg-zinc-800 rounded w-full min-w-[275px] sm:min-w-[500px] text-white outline-none"
                ref={ref}
                onInput={(e) => setPrompt(e.target.value)}
                placeholder="Type here.."
              />
              <button className="bg-zinc-800 px-6 py-3 sm:py-0 rounded font-semibold hover:bg-zinc-600 transition duration-300">
                Enter
              </button>
            </div>
          </form>

            <div className="mt-4 px-4 pb-4">
              <p className="bg-zinc-800 p-4 rounded text-center">
                {result ? (result) : ("Hi there, My name is Mattbot. What can I do for you?")}
              </p>
            </div>
        </Container>
      </Main>
    </>
  );
}
