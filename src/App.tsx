import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./type";
import Countries from "./components/Countries/Countries";

function App() {
    const countriesPromise = async():Promise<CountryType[]> => {
        const res = await fetch('https://openapi.programming-hero.com/api/all');
        const data = await res.json();
        return data.countries;
    }
    return (
        <>
            <h2 className="text-center text-3xl text-green-600 mt-5">
                Hello React TypeScript With Tailwind Css!
            </h2>
            <Suspense fallback={<p>Load Countries ...</p>}>
                <Countries countries={countriesPromise()}></Countries>
            </Suspense>
        </>
    );
}

export default App;
