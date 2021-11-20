import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent-2 text-white pt-6">
      <Container>
        <h1 class="text-lg font-bold text-center lg:text-2xl">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div class="flex justify-center mt-6">
          <div class="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
            <div class="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                class="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button class="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="my-4">Build with ❤️ BY Jason_Ma</div>
        </div>
      </Container>
    </footer>
  );
}
