export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inline-block w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
