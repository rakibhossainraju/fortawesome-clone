export const LoadingSpinner = () => {
  return (
    <>
      <div aria-label="Loading..." role="status">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="aspect-square w-32 animate-spin stroke-blue-600"
        >
          <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
        </svg>
      </div>
    </>
  );
};
