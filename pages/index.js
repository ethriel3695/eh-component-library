import Head from "next/head";

import { Animated, Basic, bounce, Combined } from "../shared/styles";

const Home = () => (
  <div className="container">
    <Head>
      <title>Frontend Release Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1 style={{ textAlign: "center" }}>RV HL Frontend Release Dashboard</h1>
      <h3>SITE: hl</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <iframe
          src="https://app.datadoghq.com/graph/embed?token=0b75fc62e014fb5d50580806a8d1d42b42f2cf8eb80d918ed13c6ebc3e275847&height=300&width=600&legend=true"
          width="600"
          height="300"
          frameBorder="0"
        />
        <iframe
          src="https://app.datadoghq.com/graph/embed?token=e5f094c46fb06b026fb7b3e13d9cac21b42fa3defcc2f25c6ede497d2b4312ee&height=300&width=600&legend=true"
          width="600"
          height="300"
          frameBorder="0"
        />
        <iframe
          src="https://app.datadoghq.com/graph/embed?token=dfdd03599e3a715b6bda1741ad38362cd020b14253fa5d26ce849bdb889fc957&height=300&width=600&legend=true"
          width="600"
          height="300"
          frameBorder="0"
        />
      </div>
    </main>
    <footer></footer>
  </div>
);

export default Home;
