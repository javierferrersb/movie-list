interface ErrorDisplayProps {
  error: string;
}
function ErrorDisplay(props: ErrorDisplayProps) {
  return (
    <div className="align-center flex w-full justify-center">
      <div className="align-center flex w-64 flex-col justify-center rounded-lg bg-red-700 pb-6 pt-6">
        <h1 className="text-center text-2xl font-bold">Error</h1>
        <p className="text-center">{props.error}</p>
      </div>
    </div>
  );
}

export default ErrorDisplay;
