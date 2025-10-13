export default function NoDishesFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <svg
        className="text-primary mb-4 h-16 w-16"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <h2 className="mb-2 text-xl font-semibold">No Dishes found</h2>
      <p className="text-muted-foreground mb-4">
        Try adjusting your filters or check back later for new Dishes.
      </p>
    </div>
  );
}
