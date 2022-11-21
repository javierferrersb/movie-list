function MovieCardSkeleton() {
  return (
    <div className="m-2 flex h-48 animate-pulse flex-row items-center rounded-lg bg-white shadow-xl dark:bg-gray-800">
      <div className="h-full w-36 rounded-l-xl bg-gray-300 dark:bg-gray-700"></div>
      <div className="ml-1 flex-row p-2 md:ml-5">
        <div className="h-6 w-32 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="mt-2 h-6 w-20 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
