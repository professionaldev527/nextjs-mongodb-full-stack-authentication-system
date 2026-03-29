import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-24">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 flex flex-col items-center text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to the App!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          You have successfully authenticated and bypassed the middleware. You
          are now securely logged in.
        </p>

        <div className="flex gap-4">
          <Link
            href="/profile"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
