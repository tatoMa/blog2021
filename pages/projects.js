import Layout from "../components/layout";
import Navigation from "../components/navigation";

import Link from "next/link";

const projects = () => {

  return (
    <Layout>
      <Navigation />

      <section>
        <div
          className="
          container
          flex flex-col
          items-center
          px-5
          py-8
          mx-auto
          max-w-7xl
          sm:px-6
          lg:px-8
        "
        >
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
                <p className="text-6xl">ALL PROJECT</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default projects;