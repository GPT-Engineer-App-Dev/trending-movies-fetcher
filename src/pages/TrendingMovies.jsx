import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fetchTrendingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_API_KEY');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const TrendingMovies = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['trendingMovies'],
    queryFn: fetchTrendingMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((movie) => (
          <Card key={movie.id}>
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;