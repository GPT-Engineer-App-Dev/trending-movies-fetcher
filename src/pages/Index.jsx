import { Link } from 'react-router-dom';

function Index() {
  return (
    <main className="flex flex-1">
      {/* Update with components here - default to put new layout sections as separate components in the components folder, and import them here */}
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
        <div className="text-center mt-4">
          <Link to="/trending-movies" className="text-blue-500 hover:underline">
            View Trending Movies
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Index;