import { Head } from "$fresh/runtime.ts";
export default function Home() {
  return (
    <>
      <Head>
        <title>Go Away</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/giphy.webp"
          class="fixed top-0 left-0 w-screen h-screen"
          alt="AI at Work"
        />
      </div>
    </>
  );
}
